import { useState } from "react";

const SIDE_LINKS = [
  "Research Partnership",
  "Our Team",
  "Social Links",
  "Sponsors",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'sent'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: wire up to your backend / form service
    console.log("Form submitted:", formData);
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    }, 600);
  };

  const inputClass =
    "bg-transparent border-b border-gray-700 pb-2 text-white focus:outline-none focus:border-bio-neon transition-colors font-mono text-sm w-full";

  return (
    <section
      id="contact"
      className="border-t border-gray-800 bg-bio-bg py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 reveal">
        <div>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 uppercase">
            Forge The
            <br />
            Future of
            <br />
            <span className="text-bio-neon">Restoration</span>
          </h2>
          <p className="text-bio-muted text-sm md:text-base max-w-md mb-8">
            Whether you're a researcher, affected citizen, or environmental
            organization — the restoration of contaminated land begins with a
            conversation.
          </p>
          <ul className="space-y-3 font-mono text-[10px] text-gray-400 uppercase">
            {SIDE_LINKS.map((link) => (
              <li key={link} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-bio-neon rounded-full"></div>
                {link}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-mono text-bio-neon uppercase tracking-widest">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Mr. RDX Monster"
              className={inputClass}
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-mono text-bio-neon uppercase tracking-widest">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="RDX@monster.org"
              className={inputClass}
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] font-mono text-bio-neon uppercase tracking-widest">
              Mission Brief
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your contamination challenge or project feedback..."
              rows={3}
              className={`${inputClass} resize-none mt-2`}
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full mt-8 border border-bio-neon text-bio-neon hover:bg-bio-neon hover:text-black transition-all duration-300 py-4 font-mono text-sm uppercase tracking-widest flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sent"
              ? "TRANSMISSION RECEIVED"
              : status === "sending"
                ? "SENDING..."
                : "INITIATE CONTACT"}
            {status === "idle" && (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transform group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}