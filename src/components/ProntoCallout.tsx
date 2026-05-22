import { AFFILIATES } from '@/lib/affiliates'

export default function ProntoCallout() {
  return (
    <div className="my-8 rounded-xl border border-[#D4185A]/30 bg-[#D4185A]/5 p-6">
      <p className="text-xs uppercase tracking-widest font-semibold text-[#D4185A]/70 mb-2">
        Climbing with French partners?
      </p>
      <h3 className="text-xl font-bold text-white mb-2">
        Learn Climbers&apos; French before you arrive.
      </h3>
      <p className="text-sm text-gray-300 mb-4 leading-relaxed">
        Language Threshold teaches climbing-specific French — belay commands, emergency phrases, technical
        vocabulary. Know the words that matter before your first day on French limestone.
        SAMU 15 is the number to know. Everything else is on the module.
      </p>
      <a
        href={AFFILIATES.languageThreshold.module}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block font-bold text-sm px-5 py-2.5 rounded-lg bg-[#D4185A] text-white hover:bg-[#D4185A]/90 transition-colors"
      >
        Start Climbers&apos; French →
      </a>
    </div>
  )
}
