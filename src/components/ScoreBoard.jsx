import { Award, BookOpenCheck, HeartHandshake, Star } from "lucide-react";

const items = [
  { key: "beauty", label: "Beauty", icon: Star, color: "bg-pink-400" },
  { key: "halal", label: "Halal", icon: HeartHandshake, color: "bg-teal-500" },
  { key: "knowledge", label: "Ilmu", icon: BookOpenCheck, color: "bg-amber-400" },
  { key: "balance", label: "Balance", icon: Award, color: "bg-rose-500" },
];

export function ScoreBoard({ score, badges }) {
  return (
    <aside className="glass-panel soft-shadow rounded-lg p-5">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg font-black text-stone-800">Score Board</h2>
        <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-rose-600">
          {badges.length} badges
        </span>
      </div>
      <div className="mt-5 space-y-4">
        {items.map(({ key, label, icon: Icon, color }) => {
          const value = Math.max(0, Math.min(100, score[key]));
          return (
            <div key={key}>
              <div className="mb-2 flex items-center justify-between text-sm font-bold">
                <span className="flex items-center gap-2 text-stone-700">
                  <Icon className="h-4 w-4" />
                  {label}
                </span>
                <span>{value}</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-white">
                <div className={`progress-fill h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {badges.length ? (
          badges.map((badge) => (
            <span key={badge} className="rounded-full bg-stone-900 px-3 py-1 text-xs font-bold text-white">
              {badge}
            </span>
          ))
        ) : (
          <span className="text-sm text-stone-500">Badge akan muncul dari pilihanmu.</span>
        )}
      </div>
    </aside>
  );
}
