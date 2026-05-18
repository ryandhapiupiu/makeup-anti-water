import { Volume2, VolumeX } from "lucide-react";

export function SoundToggle({ enabled, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-stone-700 shadow-sm transition hover:bg-rose-50"
      aria-label={enabled ? "Matikan suara" : "Nyalakan suara"}
      title={enabled ? "Matikan suara" : "Nyalakan suara"}
    >
      {enabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
    </button>
  );
}
