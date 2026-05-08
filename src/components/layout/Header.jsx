export default function Header() {
  const links = [
    { href: "#impact", label: "Impact" },
    { href: "#bioremediation", label: "Bioremediation" },
    { href: "#restoration", label: "Restoration" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-6 flex justify-between items-center text-xs font-mono uppercase tracking-widest">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-bio-neon rounded-full animate-pulse"></div>
        <span className="font-bold text-white">iGEM-RUM</span>
      </div>
      <nav className="hidden md:flex gap-8 text-bio-muted">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-bio-neon transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}