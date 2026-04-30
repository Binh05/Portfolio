import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, GitBranch, Mail, Phone, ArrowUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useGSAP(
    () => {
      gsap.fromTo(
        ".contact-content",
        { y: 60, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".contact-content",
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".social-link",
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".social-links",
            start: "top 90%",
            toggleActions: "play none none none",
          },
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    },
    { scope: containerRef },
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto link for GitHub Pages (no backend)
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    window.open(
      `mailto:binhdt0452@gmail.com?subject=${subject}&body=${body}`,
      "_blank",
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const socialLinks = [
    {
      label: "GitHub",
      url: "https://github.com/Binh05",
      icon: <GitBranch className="h-5 w-5" />,
      color: "hover:border-white/30 hover:text-white",
    },
    {
      label: "Email",
      url: "mailto:binhdt0452@gmail.com",
      icon: <Mail className="h-5 w-5" />,
      color: "hover:border-cyan-500/30 hover:text-cyan-400",
    },
    {
      label: "Phone",
      url: "tel:+84703742386",
      icon: <Phone className="h-5 w-5" />,
      color: "hover:border-green-500/30 hover:text-green-400",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="contact"
      className="bg-background relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/8 blur-[180px]" />

      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold tracking-[0.3em] text-cyan-400 uppercase">
            Get in touch
          </p>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from
            you.
          </p>
        </div>

        <div className="contact-content mx-auto grid max-w-4xl grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-gray-400"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 transition-all outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-gray-400"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 transition-all outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 transition-all outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] sm:w-auto"
              >
                {submitted ? (
                  "Opening email client..."
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="flex flex-col justify-center gap-6 lg:col-span-2">
            <div className="glass-card p-6">
              <h4 className="mb-4 text-sm font-bold tracking-wider text-gray-500 uppercase">
                Connect with me
              </h4>
              <div className="social-links space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-link flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-gray-400 transition-all duration-300 ${link.color}`}
                  >
                    {link.icon}
                    <span className="font-medium">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h4 className="mb-2 text-sm font-bold tracking-wider text-gray-500 uppercase">
                Location
              </h4>
              <p className="text-sm text-gray-300">Ho Chi Minh City, Vietnam</p>
              <p className="mt-1 text-xs text-gray-500">
                Available for remote work
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 flex flex-col items-center gap-6 border-t border-white/5 pt-8">
          <a
            href="#hero"
            className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-cyan-400"
          >
            <ArrowUp className="h-4 w-4" />
            Back to top
          </a>
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Nguyen Thanh Binh. Built with React,
            TailwindCSS & GSAP.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
