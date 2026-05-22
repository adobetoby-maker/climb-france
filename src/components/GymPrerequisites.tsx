'use client'
import type { ClimbingRoute } from '@/lib/routes'
import { useLang } from '@/context/lang'
import { content } from '@/lib/content'

type Props = {
  prereqs: ClimbingRoute['gymPrerequisites']
  routeName: string
}

export default function GymPrerequisites({ prereqs, routeName }: Props) {
  const { lang } = useLang()
  const c = content[lang]

  return (
    <section className="mb-12" aria-labelledby="prereqs-heading">
      <div className="bg-[#12122A] border border-[#4A7C59]/30 rounded-xl p-6">
        <h2 id="prereqs-heading" className="text-[#4A7C59] font-bold text-lg mb-1">
          {c.labels.beforeYouGo}
        </h2>
        <p className="text-gray-400 text-sm mb-5">
          What to master at your local gym before attempting {routeName}
        </p>

        <div className="grid sm:grid-cols-3 gap-3 mb-5">
          <div className="bg-[#1A1A2E] rounded-lg p-4">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">{c.labels.leadGrade}</p>
            <p className="text-white font-semibold text-sm leading-snug">{prereqs.leadGrade}</p>
          </div>
          <div className="bg-[#1A1A2E] rounded-lg p-4">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">{c.labels.outdoorDays}</p>
            <p className="text-white font-semibold text-sm leading-snug">{prereqs.outdoorDays}</p>
          </div>
          <div className="bg-[#1A1A2E] rounded-lg p-4">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">{c.labels.fitnessLevel}</p>
            <p className="text-white font-semibold text-sm leading-snug">{prereqs.fitnessLevel}</p>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">
            {c.labels.skillsToPractice}
          </p>
          <ul className="space-y-2">
            {prereqs.skills.map((skill, i) => (
              <li key={i} className="flex gap-2 text-gray-300 text-sm">
                <span className="text-[#4A7C59] mt-0.5 shrink-0" aria-hidden="true">&#10003;</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {prereqs.gymDrills && prereqs.gymDrills.length > 0 && (
          <div className="mt-5 pt-5 border-t border-[#4A7C59]/20">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">
              {c.labels.trainAtGym}
            </p>
            <ul className="space-y-2">
              {prereqs.gymDrills.map((drill, i) => (
                <li key={i} className="flex gap-2 text-gray-300 text-sm">
                  <span className="text-gray-500 mt-0.5 shrink-0" aria-hidden="true">→</span>
                  {drill}
                </li>
              ))}
            </ul>
          </div>
        )}

        {prereqs.warning && (
          <div className="mt-5 pt-5 border-t border-red-800/20">
            <p className="text-red-300 text-sm font-semibold">{prereqs.warning}</p>
          </div>
        )}
      </div>
    </section>
  )
}
