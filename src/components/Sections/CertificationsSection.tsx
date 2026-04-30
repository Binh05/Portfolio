import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, ExternalLink, BookOpen } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function CertificationsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".cert-card",
        { y: 60, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".certs-container",
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
        ".achievement-badge",
        { scale: 0, rotation: -15 },
        {
          scrollTrigger: {
            trigger: ".certs-container",
            start: "top 80%",
            toggleActions: "play none none none",
          },
          scale: 1,
          rotation: 0,
          duration: 0.6,
          delay: 0.3,
          ease: "back.out(1.7)",
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="certifications"
      className="bg-background relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-yellow-500/8 blur-[150px]" />
      <div className="absolute top-0 left-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-[120px]" />

      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold tracking-[0.3em] uppercase text-yellow-400">
            Recognition
          </p>
          <h2 className="section-title">Achievements & Certifications</h2>
          <p className="section-subtitle mx-auto">
            Awards and research contributions that mark my academic journey.
          </p>
        </div>

        {/* Certifications Content */}
        <div className="certs-container mx-auto max-w-3xl">
          {/* Main Achievement Card */}
          <div className="cert-card group relative overflow-hidden rounded-2xl border border-yellow-500/20 bg-linear-to-br from-yellow-500/5 via-white/5 to-orange-500/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-yellow-500/40 md:p-10">
            {/* Glow Effect */}
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-yellow-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Badge */}
            <div className="achievement-badge mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-500/30 bg-yellow-500/10 shadow-[0_0_30px_rgba(234,179,8,0.15)]">
                <Award className="h-8 w-8 text-yellow-400" />
              </div>
              <div>
                <div className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-yellow-400">
                  Ministry Level
                </div>
              </div>
            </div>

            {/* Title */}
            <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">
              Third Prize
            </h3>
            <p className="mb-6 text-lg font-medium text-yellow-400/80">
              National Scientific Research Competition
            </p>

            {/* Divider */}
            <div className="mb-6 h-px w-full bg-linear-to-r from-transparent via-yellow-500/30 to-transparent" />

            {/* Research Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400/70" />
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Research Project
                  </p>
                  <p className="text-sm leading-relaxed text-gray-300">
                    Estimating Nutritional Composition from Food Volume via Deep
                    Learning-Based Depth and Segmentation Models
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ExternalLink className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400/70" />
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Publication
                  </p>
                  <a
                    href="https://doi.org/10.9734/ajrcos/2025/v18i5650"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-yellow-400 underline decoration-yellow-400/30 underline-offset-4 transition-all hover:text-yellow-300 hover:decoration-yellow-400"
                  >
                    doi.org/10.9734/ajrcos/2025/v18i5650
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-8">
              <a
                href="https://doi.org/10.9734/ajrcos/2025/v18i5650"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-yellow-500/30 bg-yellow-500/10 px-5 py-2.5 text-sm font-semibold text-yellow-300 transition-all duration-300 hover:bg-yellow-500/20 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]"
              >
                <BookOpen className="h-4 w-4" />
                Read Publication
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CertificationsSection;
