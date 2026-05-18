import { motion } from "framer-motion";
import { BellRing, Clock3 } from "lucide-react";

export function PrayerEvent({ event, onChoose, answered }) {
  return (
    <motion.section
      className="glass-panel soft-shadow rounded-lg p-5"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-teal-100 p-2 text-teal-700">
            <BellRing className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-xl font-black text-stone-800">{event.name}</h2>
            <p className="flex items-center gap-1 text-sm font-semibold text-stone-500">
              <Clock3 className="h-4 w-4" />
              {event.time}
            </p>
          </div>
        </div>
        <span className="rounded-full bg-rose-100 px-3 py-1 text-sm font-bold text-rose-700">
          Prayer event
        </span>
      </div>
      <p className="mt-4 text-base leading-7 text-stone-700">{event.prompt}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {event.choices.map((choice) => (
          <motion.button
            key={choice.label}
            type="button"
            onClick={() => onChoose(choice)}
            disabled={answered}
            className="rounded-lg border border-rose-100 bg-white px-4 py-3 text-left text-sm font-bold text-stone-700 transition hover:border-rose-300 hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-60"
            whileTap={{ scale: 0.98 }}
          >
            {choice.label}
          </motion.button>
        ))}
      </div>
    </motion.section>
  );
}
