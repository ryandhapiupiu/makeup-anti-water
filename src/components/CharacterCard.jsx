import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function CharacterCard({ character, active, onSelect }) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(character)}
      className={`relative min-h-44 rounded-lg border p-4 text-left transition ${
        active
          ? "border-rose-400 bg-white"
          : "border-white/80 bg-white/70 hover:border-rose-200"
      }`}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className={`mb-4 flex h-20 w-20 items-end justify-center rounded-full bg-gradient-to-br ${character.palette}`}
      >
        <div className="relative h-16 w-12 rounded-t-full bg-rose-300">
          <div className="absolute left-1/2 top-4 h-9 w-9 -translate-x-1/2 rounded-full bg-amber-100" />
          <div className="absolute left-1/2 top-2 h-10 w-12 -translate-x-1/2 rounded-t-full bg-pink-400" />
          <div className="absolute bottom-0 left-1/2 h-8 w-14 -translate-x-1/2 rounded-t-full bg-teal-300" />
        </div>
      </div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-stone-800">{character.name}</h3>
          <p className="text-sm font-semibold text-rose-500">{character.role}</p>
        </div>
        {active ? <Sparkles className="h-5 w-5 text-amber-500" /> : null}
      </div>
      <p className="mt-3 text-sm leading-6 text-stone-600">{character.trait}</p>
      <p className="mt-3 rounded-md bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-700">
        {character.bonus}
      </p>
    </motion.button>
  );
}
