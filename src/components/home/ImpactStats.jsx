const STATS = [
  { value: "40M+", label: "Hectares contaminated globally by explosive residues" },
  { value: "75+", label: "Countries with military testing site contamination" },
  { value: "100+", label: "Years some compounds persist in untreated soil" },
  { value: "2.6B", label: "People living near contaminated former conflict zones" },
];

const COMPOUNDS = [
  { name: "TNT", formula: "C₇H₅N₃O₆", tag: "CARCINOGENIC", tagColor: "text-red-500" },
  { name: "RDX", formula: "C₃H₆N₆O₆", tag: "NEUROTOXIC", tagColor: "text-red-500" },
  { name: "HMX", formula: "C₄H₈N₈O₈", tag: "PERSISTENT", tagColor: "text-orange-500" },
  { name: "DNT", formula: "C₇H₆N₂O₄", tag: "MUTAGENIC", tagColor: "text-red-500" },
];

export default function ImpactStats() {
  return (
    <>
      <section
        id="impact"
        className="py-32 px-6 md:px-12 max-w-7xl mx-auto"
      >
        <div className="mb-16 reveal">
          <span className="text-bio-neon font-mono text-xs tracking-widest uppercase block mb-4">
            01 — The Contamination
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase">
            The Invisible
            <br />
            Scars
          </h2>
          <p className="text-bio-muted max-w-2xl text-lg">
            Every explosion leaves behind a chemical legacy. TNT, RDX, HMX —
            these nitroaromatic compounds persist in soil and groundwater for
            decades, poisoning ecosystems and communities long after the blast
            fades from memory.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 reveal reveal-delay-1">
          {STATS.map((stat) => (
            <div key={stat.value} className="border-t border-bio-neon/30 pt-4">
              <div className="text-4xl md:text-5xl font-display text-bio-neon mb-2">
                {stat.value}
              </div>
              <p className="text-[10px] text-bio-muted font-mono uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal reveal-delay-2">
          {COMPOUNDS.map((compound) => (
            <div
              key={compound.name}
              className="chem-box bg-bio-card p-6 flex flex-col items-center justify-center text-center"
            >
              <span className="text-2xl font-bold font-display text-bio-orange mb-2">
                {compound.name}
              </span>
              <span className="text-xs font-mono text-bio-muted mb-1">
                {compound.formula}
              </span>
              <span
                className={`text-[10px] font-mono tracking-widest ${compound.tagColor}`}
              >
                {compound.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="w-px h-[100px] bg-gradient-to-b from-transparent via-bio-neon to-transparent mx-auto opacity-50 reveal"></div>
    </>
  );
}