export default function Hero() {
  return (
    <>
      <section className="h-screen flex flex-col items-center justify-start pt-48 text-center px-4 relative">
        <div className="max-w-7xl reveal active">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-none tracking-tighter mb-6 uppercase">
            RDetox 2.5:
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 from-10% via-white via-30% to-bio-neon to-80%">
              Invisible Enemies
            </span>
          </h1>
          <p className="text-bio-muted text-lg md:text-xl max-w-2xl mx-auto font-sans mb-12">
            Turning Explosive Sites into Living Landscapes.
            <br />
            Healing the earth with synthetic biology.
          </p>
          <div className="flex flex-col items-center gap-4 text-xs font-mono text-bio-muted animate-bounce mt-10">
            <span>EXPLORE OUR SOLUTION</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </section>

      <div className="w-px h-[100px] bg-gradient-to-b from-transparent via-bio-neon to-transparent mx-auto opacity-50 reveal"></div>
    </>
  );
}