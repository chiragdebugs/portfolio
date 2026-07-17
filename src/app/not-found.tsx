import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="text-[150px] md:text-[200px] font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 mb-8">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight">
          Page Not Found
        </h2>
        <p className="text-zinc-400 max-w-md text-lg mb-10 leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back home.
        </p>
        <Link 
          href="/" 
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Return Home
        </Link>
      </div>
    </div>
  )
}
