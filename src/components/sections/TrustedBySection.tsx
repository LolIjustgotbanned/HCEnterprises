import { SITE, CLIENT_NAMES } from '@/lib/constants'

export default function TrustedBySection() {
  const doubled = [...CLIENT_NAMES, ...CLIENT_NAMES]

  return (
    <section className="py-12 border-y border-[#1A2540] bg-[#080F24]/50 overflow-hidden">
      <p className="text-center text-slate-500 text-sm font-medium tracking-widest uppercase mb-8">
        {SITE.socialProof}
      </p>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050A18] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050A18] to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-16 whitespace-nowrap"
          style={{ animation: 'marquee 30s linear infinite' }}
        >
          {doubled.map((name, i) => (
            <span
              key={i}
              className="text-slate-600 text-lg font-semibold tracking-wide shrink-0"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
