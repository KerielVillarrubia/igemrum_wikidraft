const NAV_LINKS = [
  { href: "#impact", label: "Impact" },
  { href: "#bioremediation", label: "Bioremediation" },
  { href: "#restoration", label: "Restoration" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-900 bg-black py-12 px-6 md:px-12 text-[10px] font-mono text-gray-500 uppercase">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <span className="font-bold text-white uppercase">RDETOX 2.5</span>
          </div>
          <p>
            Pioneering the restoration of contaminated landscapes through
            biological innovation.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-white mb-1">The Process</span>
          <code>RDX → Formaldehyde + Nitrite → N₂ (Engineering)</code>
          <span>
            Turning Explosive Sites into Living Landscapes.
            <br />
            Healing the earth with synthetic biology.
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-white mb-1">Navigate</span>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-bio-neon transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-900 flex flex-col sm:flex-row justify-between gap-2">
        <span>© 2026 iGEM-RUM — RDETOX 2.5 PROJECT</span>
        <span>DESIGNED FOR THE CONTAMINATED EARTH</span>
      </div>
    </footer>
  );
}