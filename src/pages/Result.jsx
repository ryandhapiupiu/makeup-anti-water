import { motion } from "framer-motion";
import { Home, RefreshCcw, Trophy } from "lucide-react";
import { ScoreBoard } from "../components/ScoreBoard.jsx";

export function Result({ score, badges, character, onReset, onBack }) {
  const ending = getEnding(score);

  return (
    <div className="modest-pattern min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <main className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_340px]">
        <motion.section
          className="glass-panel soft-shadow rounded-lg p-6 sm:p-8"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-800">
            <Trophy className="h-4 w-4" />
            Ending unlocked
          </span>
          <h1 className="mt-5 text-3xl font-black text-stone-900 sm:text-5xl">{ending.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-600">{ending.description}</p>

          <div className="mt-6 rounded-lg bg-white p-5">
            <p className="text-sm font-black uppercase tracking-wide text-rose-600">Character story</p>
            <p className="mt-2 leading-7 text-stone-700">
              {character.name} sebagai {character.role} belajar bahwa tampil rapi dan menjaga wudhu bisa berjalan
              bareng ketika pilihan produknya sadar, bersih, dan sesuai kebutuhan ibadah.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-stone-800 transition hover:bg-rose-50"
            >
              <Home className="h-4 w-4" />
              Kembali
            </button>
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-stone-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-stone-700"
            >
              <RefreshCcw className="h-4 w-4" />
              Main lagi
            </button>
          </div>
        </motion.section>

        <ScoreBoard score={score} badges={badges} />
      </main>
    </div>
  );
}

function getEnding(score) {
  if (score.halal >= 82 && score.knowledge >= 75) {
    return {
      title: "Beauty Influencer Syariah",
      description:
        "Kamu tampil percaya diri, paham prioritas ibadah, dan bisa mengedukasi orang lain dengan cara yang lembut.",
    };
  }

  if (score.beauty >= 72 && score.halal < 50) {
    return {
      title: "Makeup Addict",
      description:
        "Look kamu kuat, tapi rutinitas wudhu masih perlu ditata ulang agar tidak ada lapisan yang menghalangi air.",
    };
  }

  return {
    title: "Balanced Muslimah",
    description:
      "Kamu menemukan ritme yang seimbang: tetap merawat diri, tetap praktis, dan tetap memprioritaskan shalat.",
  };
}
