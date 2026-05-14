const METRICS = [
  {
    label: "Soil Toxicity Reduction",
    before: "100%",
    after: "< 3%",
    afterColor: "text-bio-neon",
    beforeStyle: "line-through",
  },
  {
    label: "Groundwater Purity",
    before: "0.8",
    after: "< 0.002",
    afterColor: "text-bio-neon",
    beforeStyle: "line-through",
    note: "mg/L TNT Concentration",
  },
  {
    label: "Biodiversity Index",
    before: "0.12",
    after: "→ 0.87",
    afterColor: "text-bio-orange",
    beforeStyle: "",
    note: "Shannon Index",
  },
];

export default function Restoration() {
  return (
    <section
      id="restoration"
      className="py-32 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <div className="mb-12 reveal">
        <span className="text-bio-neon font-mono text-xs tracking-widest uppercase block mb-4">
          03 — The Restoration Ledger
        </span>
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase">
          From Scar
          <br />
          <span className="text-bio-neon">To Sanctuary</span>
        </h2>
      </div>

      <div className="relative w-full h-[50vh] md:h-[70vh] flex overflow-hidden border border-gray-800 mb-12 reveal">
        <div className="w-1/2 h-full relative border-r-2 border-bio-neon/50">
          <img
            src="https://images.unsplash.com/photo-1534996858221-380b92707e7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Barren land"
            className="w-full h-full object-cover filter grayscale contrast-125"
          />
          <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1 font-mono text-xs text-white border border-gray-700">
            ← BEFORE
          </div>
        </div>

        <div className="w-1/2 h-full relative">
          <img
            src="https://images.unsplash.com/photo-1518182170546-076616fd4278?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Lush forest"
            className="w-full h-full object-cover filter saturate-150"
          />
          <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 font-mono text-xs text-bio-neon border border-bio-neon/50">
            AFTER →
          </div>
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-full bg-gradient-to-r from-transparent via-bio-neon to-transparent opacity-20 blur-sm pointer-events-none"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-8 reveal reveal-delay-1">
        {METRICS.map((metric) => (
          <div key={metric.label}>
            <p className="text-[10px] font-mono text-bio-muted uppercase mb-2">
              {metric.label}
            </p>
            <div className="flex items-end gap-2">
              <span
                className={`text-gray-500 text-xl font-mono ${metric.beforeStyle}`}
              >
                {metric.before}
              </span>
              <span className={`text-4xl font-display ${metric.afterColor}`}>
                {metric.after}
              </span>
            </div>
            {metric.note && (
              <p className="text-[10px] font-mono text-bio-muted mt-1">
                {metric.note}
              </p>
            )}
          </div>
        ))}

        <div>
          <p className="text-[10px] font-mono text-bio-muted uppercase mb-2">
            Treatment Duration
          </p>
          <div className="text-4xl font-display text-white">18-36</div>
          <p className="text-[10px] font-mono text-bio-muted mt-1">Months</p>
        </div>
      </div>
    </section>
  );
}