import Navbar from './Navbar'
import Footer from './Footer'

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#050A18] pt-24 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-12">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-[#D4AF6A] text-sm hover:underline mb-8 block"
            >
              ← Back to home
            </a>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">
              {title}
            </h1>
            <p className="text-slate-500 text-sm">Last updated: {lastUpdated}</p>
          </div>

          <div className="prose-legal">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  )
}
