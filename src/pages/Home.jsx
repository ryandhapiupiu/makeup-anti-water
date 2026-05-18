import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, CheckCircle2, RotateCcw } from "lucide-react";
import { CharacterCard } from "../components/CharacterCard.jsx";
import { PrayerEvent } from "../components/PrayerEvent.jsx";
import { ProductCard } from "../components/ProductCard.jsx";
import { ScoreBoard } from "../components/ScoreBoard.jsx";
import { SoundToggle } from "../components/SoundToggle.jsx";
import { characters, cosmetics, prayerEvents } from "../data.js";

export function Home({
  character,
  selectedProducts,
  score,
  badges,
  eventIndex,
  feedback,
  soundOn,
  gameDone,
  onSelectCharacter,
  onToggleProduct,
  onPrayerChoice,
  onNextEvent,
  onReset,
  onToggleSound,
}) {
  const activeEvent = prayerEvents[eventIndex];

  return (
    <div className="modest-pattern min-h-screen px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_360px]">
        <main className="space-y-6">
          <header className="glass-panel soft-shadow rounded-lg p-5 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-wide text-teal-700">
                  Islamic educational web game
                </p>
                <h1 className="mt-2 max-w-3xl text-3xl font-black leading-tight text-stone-900 sm:text-5xl">
                  Beauty Wudhu Game
                </h1>
                <p className="mt-3 max-w-2xl text-base leading-7 text-stone-600">
                  Pilih kosmetik, respon waktu shalat, lalu pelajari apakah rutinitas beauty kamu wudhu-friendly.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <SoundToggle enabled={soundOn} onToggle={onToggleSound} />
                <button
                  type="button"
                  onClick={onReset}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-stone-700 shadow-sm transition hover:bg-rose-50"
                  aria-label="Ulang game"
                  title="Ulang game"
                >
                  <RotateCcw className="h-5 w-5" />
                </button>
              </div>
            </div>
          </header>

          <section className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-black text-stone-800">Pilih Karakter</h2>
              <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-stone-600">
                {character.name} aktif
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {characters.map((item) => (
                <CharacterCard
                  key={item.id}
                  character={item}
                  active={item.id === character.id}
                  onSelect={onSelectCharacter}
                />
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-black text-stone-800">Beauty Kit</h2>
                <p className="text-sm text-stone-600">Pilih maksimal 3 item untuk aktivitas hari ini.</p>
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-rose-600">
                {selectedProducts.length}/3 selected
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {cosmetics.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  selected={selectedProducts.some((item) => item.id === product.id)}
                  disabled={selectedProducts.length >= 3}
                  onToggle={onToggleProduct}
                />
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-black text-stone-800">Prayer Time System</h2>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-bold text-teal-700">
                <CalendarDays className="h-4 w-4" />
                Day routine
              </span>
            </div>
            {activeEvent ? (
              <PrayerEvent event={activeEvent} onChoose={onPrayerChoice} answered={Boolean(feedback)} />
            ) : null}

            <AnimatePresence>
              {feedback ? (
                <motion.div
                  className="rounded-lg border border-teal-100 bg-white p-4 text-stone-700"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-600" />
                    <div>
                      <p className="font-bold text-stone-800">Catatan fiqih</p>
                      <p className="mt-1 leading-7">{feedback}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={onNextEvent}
                    className="mt-4 rounded-lg bg-stone-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-stone-700"
                  >
                    {gameDone ? "Lihat ending" : "Lanjut event"}
                  </button>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </section>
        </main>

        <div className="space-y-6 lg:sticky lg:top-6 lg:self-start">
          <ScoreBoard score={score} badges={badges} />
          <section className="glass-panel rounded-lg p-5">
            <h2 className="text-lg font-black text-stone-800">Mini Guide</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-stone-600">
              <p>Produk yang membentuk lapisan tahan air perlu dibersihkan sebelum wudhu.</p>
              <p>Skincare ringan biasanya lebih mudah, tapi tetap cek apakah ada residu.</p>
              <p>Game ini edukatif, bukan pengganti bertanya ke ustadzah atau ahli fiqih.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
