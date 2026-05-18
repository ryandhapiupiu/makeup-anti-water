import { motion } from "framer-motion";
import { Droplets, ShieldCheck, Sparkle } from "lucide-react";

export function ProductCard({ product, selected, disabled, onToggle }) {
  return (
    <motion.button
      type="button"
      onClick={() => onToggle(product)}
      disabled={disabled && !selected}
      className={`rounded-lg border p-4 text-left transition ${
        selected
          ? "border-rose-400 bg-white shadow-lg shadow-rose-100"
          : "border-white/80 bg-white/75 hover:border-teal-200"
      } ${disabled && !selected ? "cursor-not-allowed opacity-45" : ""}`}
      layout
      whileHover={!disabled || selected ? { y: -3 } : undefined}
      whileTap={!disabled || selected ? { scale: 0.98 } : undefined}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-teal-600">
            {product.type}
          </p>
          <h3 className="mt-1 text-base font-bold text-stone-800">{product.name}</h3>
        </div>
        <span
          className={`rounded-full p-2 ${
            product.barrier ? "bg-amber-100 text-amber-700" : "bg-teal-100 text-teal-700"
          }`}
        >
          {product.barrier ? <Droplets className="h-5 w-5" /> : <ShieldCheck className="h-5 w-5" />}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-stone-600">{product.detail}</p>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-bold">
        <span className="rounded-md bg-pink-50 px-2 py-2 text-pink-700">
          Beauty +{product.beauty}
        </span>
        <span className="rounded-md bg-teal-50 px-2 py-2 text-teal-700">
          Halal {product.halal > 0 ? "+" : ""}
          {product.halal}
        </span>
        <span className="rounded-md bg-amber-50 px-2 py-2 text-amber-700">
          Ilmu +{product.knowledge}
        </span>
      </div>
      {selected ? (
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-rose-600">
          <Sparkle className="h-4 w-4" />
          Dipilih
        </span>
      ) : null}
    </motion.button>
  );
}
