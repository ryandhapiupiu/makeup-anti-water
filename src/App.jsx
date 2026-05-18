import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Home } from "./pages/Home.jsx";
import { Result } from "./pages/Result.jsx";
import { characters, prayerEvents } from "./data.js";

const initialScore = {
  beauty: 20,
  halal: 40,
  knowledge: 30,
  balance: 35,
};

export default function App() {
  const [screen, setScreen] = useState("home");
  const [character, setCharacter] = useState(characters[0]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [score, setScore] = useState(initialScore);
  const [eventIndex, setEventIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [soundOn, setSoundOn] = useState(true);

  const badges = useMemo(() => buildBadges(score, selectedProducts), [score, selectedProducts]);
  const gameDone = eventIndex >= prayerEvents.length - 1;

  function playTone(kind = "click") {
    if (!soundOn) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const context = new AudioContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const notes = {
      click: 520,
      good: 740,
      alert: 330,
    };

    oscillator.frequency.value = notes[kind] || notes.click;
    oscillator.type = kind === "alert" ? "triangle" : "sine";
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.12, context.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.18);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.2);
  }

  function applyScore(delta) {
    setScore((current) => {
      const next = { ...current };
      Object.entries(delta).forEach(([key, value]) => {
        next[key] = Math.max(0, Math.min(100, (next[key] || 0) + value));
      });
      return next;
    });
  }

  function handleSelectCharacter(nextCharacter) {
    if (nextCharacter.id === character.id) return;
    setCharacter(nextCharacter);
    playTone("click");
    const bonus = nextCharacter.id === "student" ? { knowledge: 4 } : nextCharacter.id === "office" ? { balance: 5 } : { halal: 3, knowledge: 3 };
    applyScore(bonus);
  }

  function handleToggleProduct(product) {
    playTone(product.barrier ? "alert" : "good");
    const exists = selectedProducts.some((item) => item.id === product.id);

    if (exists) {
      applyScore({
        beauty: -product.beauty,
        halal: -product.halal,
        knowledge: -product.knowledge,
        balance: product.barrier ? 4 : -4,
      });
      setSelectedProducts((current) => current.filter((item) => item.id !== product.id));
      return;
    }

    if (selectedProducts.length >= 3) return;

    applyScore({
      beauty: product.beauty,
      halal: product.halal,
      knowledge: product.knowledge,
      balance: product.barrier ? -4 : 4,
    });
    setSelectedProducts((current) => [...current, product]);
  }

  function handlePrayerChoice(choice) {
    playTone(choice.score.halal >= 0 ? "good" : "alert");
    const barrierCount = selectedProducts.filter((item) => item.barrier).length;
    const barrierPenalty = barrierCount ? { halal: -barrierCount * 4, knowledge: barrierCount * 2 } : {};
    applyScore({ ...choice.score, ...barrierPenalty });
    setFeedback(choice.feedback);
  }

  function handleNextEvent() {
    playTone("click");
    setFeedback("");
    if (gameDone) {
      setScreen("result");
      return;
    }
    setEventIndex((current) => current + 1);
  }

  function handleReset() {
    playTone("click");
    setScreen("home");
    setCharacter(characters[0]);
    setSelectedProducts([]);
    setScore(initialScore);
    setEventIndex(0);
    setFeedback("");
  }

  return (
    <AnimatePresence mode="wait">
      {screen === "home" ? (
        <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Home
            character={character}
            selectedProducts={selectedProducts}
            score={score}
            badges={badges}
            eventIndex={eventIndex}
            feedback={feedback}
            soundOn={soundOn}
            gameDone={gameDone}
            onSelectCharacter={handleSelectCharacter}
            onToggleProduct={handleToggleProduct}
            onPrayerChoice={handlePrayerChoice}
            onNextEvent={handleNextEvent}
            onReset={handleReset}
            onToggleSound={() => setSoundOn((current) => !current)}
          />
        </motion.div>
      ) : (
        <motion.div key="result" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Result
            score={score}
            badges={badges}
            character={character}
            onReset={handleReset}
            onBack={() => setScreen("home")}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function buildBadges(score, selectedProducts) {
  const badges = [];
  if (score.halal >= 70) badges.push("Wudhu Aware");
  if (score.knowledge >= 70) badges.push("Fiqih Smart");
  if (score.beauty >= 70) badges.push("Soft Glam");
  if (score.balance >= 70) badges.push("Balanced Routine");
  if (selectedProducts.some((item) => item.id === "cleansing-balm")) badges.push("Clean First");
  return badges.slice(0, 5);
}
