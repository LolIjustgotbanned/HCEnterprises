import { CLIENT_NAMES, SITE } from '@/lib/constants'

export default function TrustedBySection() {
  return (
    <section className="py-10 border-y border-[#2A2A2A]">
      <p className="text-center text-zinc-600 text-xs font-medium tracking-widest uppercase">
        {SITE.socialProof}
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-3 max-w-4xl mx-auto px-6">
        {CLIENT_NAMES.map((name) => (
          <span key={name} className="text-zinc-700 text-sm font-medium">
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
