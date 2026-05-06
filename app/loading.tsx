export default function Loading() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center pt-32">
      <div className="flex flex-col items-center gap-4 text-text-muted">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-[#222]" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-orange-DEFAULT animate-spin" />
        </div>
        <p className="text-xs font-mono uppercase tracking-widest text-orange-DEFAULT/70">
          Mining block…
        </p>
      </div>
    </section>
  )
}
