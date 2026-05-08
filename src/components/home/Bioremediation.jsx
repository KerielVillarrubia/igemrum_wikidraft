export default function Bioremediation() {
  return (
    <>
      <section
        id="bioremediation"
        className="py-32 px-6 md:px-12 max-w-7xl mx-auto"
      >
        <div className="mb-16 reveal">
          <span className="text-bio-neon font-mono text-xs tracking-widest uppercase block mb-4">
            02 — The Regeneration Engine
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 uppercase">
            Life Devours
            <br />
            Death
          </h2>
          <p className="text-bio-muted max-w-2xl text-lg">
            <span className="font-bold text-white">
              RDX is built to last; we've engineered its downfall.
            </span>{" "}
            By installing a specialized genetic module into bacterial hosts, we
            are breaking the bonds of the earth's most recalcitrant explosive.
            This engineered intervention bridges the gap between environmental
            damage and ecological recovery, providing a scalable, bio-based
            answer to the world's most persistent explosives.
          </p>
        </div>

        <div className="space-y-12">
          <div className="bg-bio-card overflow-hidden flex flex-col md:flex-row border border-gray-800 reveal">
            <div className="md:w-2/5 h-64 md:h-auto relative">
              <img
                src="https://images.unsplash.com/photo-1611075677323-93335552b83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Mycelium"
                className="object-cover w-full h-full opacity-60 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-bio-neon/10 mix-blend-overlay"></div>
            </div>
            <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center">
              <span className="text-[10px] font-mono text-bio-muted uppercase tracking-widest mb-2">
                Genetic Module (?)
              </span>
              <h3 className="text-4xl font-display italic mb-4">
                XplA/B Enzymes (?)
              </h3>
              <p className="text-bio-muted text-sm mb-8">
                Enzymatic degradation via ... idk
              </p>
              <div className="border-l-2 border-bio-neon pl-4 mb-6">
                <span className="text-[10px] font-mono text-bio-muted uppercase block mb-1">
                  Degradation Pathway
                </span>
                <code className="text-bio-neon text-sm font-mono">
                  RDX → Formaldehyde + Nitrite → N₂ (Engineering)
                </code>
              </div>
              <div>
                <div className="text-5xl font-display text-white mb-1">94%</div>
                <div className="text-[10px] font-mono text-bio-muted uppercase">
                  Degradation Efficiency
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-px h-[100px] bg-gradient-to-b from-transparent via-bio-neon to-transparent mx-auto opacity-50 reveal"></div>
    </>
  );
}