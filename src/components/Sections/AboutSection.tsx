import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, MapPin, Mail, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Languages",
    color: "from-cyan-400 to-blue-500",
    skills: ["C#", "TypeScript", "JavaScript"],
  },
  {
    title: "Backend",
    color: "from-purple-400 to-pink-500",
    skills: ["ASP.NET Core", "Node.js", "REST API Design"],
  },
  {
    title: "Databases",
    color: "from-green-400 to-emerald-500",
    skills: ["PostgreSQL", "SQL Server", "MongoDB"],
  },
  {
    title: "Frontend",
    color: "from-orange-400 to-red-500",
    skills: ["Next.js", "React", "Redux Toolkit", "TailwindCSS"],
  },
  {
    title: "DevOps & Tools",
    color: "from-yellow-400 to-orange-500",
    skills: ["Git", "Docker", "MinIO", "npm"],
  },
];

function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Animate the intro card
      gsap.fromTo(
        ".about-intro",
        { y: 60, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".about-intro",
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      // Animate skill cards with stagger
      gsap.fromTo(
        ".skill-card",
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="bg-background relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[150px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold tracking-[0.3em] uppercase text-cyan-400">
            Get to know me
          </p>
          <h2 className="section-title">About Me</h2>
        </div>

        {/* Intro Card */}
        <div className="about-intro glass-card glow-cyan mx-auto mb-16 max-w-3xl p-8 md:p-10">
          <div className="flex flex-col gap-6">
            {/* Name & Role */}
            <div>
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                Nguyen Thanh Binh
              </h3>
              <p className="mt-1 text-lg font-medium text-cyan-400">
                Software Engineer Intern
              </p>
            </div>

            {/* Summary */}
            <p className="leading-relaxed text-gray-300">
              Third-year Information Technology student seeking a Software
              Engineer Intern role with a focus on backend systems. Experienced
              in building full-stack applications, real-time systems, and
              RESTful APIs using{" "}
              <span className="font-semibold text-white">
                .NET (ASP.NET Core)
              </span>{" "}
              and{" "}
              <span className="font-semibold text-white">Node.js</span>.
              Available for full-time work immediately.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 text-gray-400">
                <GraduationCap className="h-5 w-5 text-cyan-400" />
                <div>
                  <p className="text-sm font-medium text-white">
                    HCMC University of Education
                  </p>
                  <p className="text-xs text-gray-500">
                    B.IT — GPA: 3.15/4.0 (2023–2027)
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span className="text-sm">Ho Chi Minh City, Vietnam</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-cyan-400" />
                <a
                  href="mailto:binhdt0452@gmail.com"
                  className="text-sm transition-colors hover:text-cyan-400"
                >
                  binhdt0452@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span className="text-sm">+84 703 742 386</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-8 text-center">
          <h3 className="text-xl font-bold text-white md:text-2xl">
            Technical Skills
          </h3>
          <p className="text-muted-foreground mt-2 text-sm">
            Technologies I work with on a daily basis
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="skill-card glass-card group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              {/* Category Header */}
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`h-2 w-2 rounded-full bg-linear-to-r ${category.color}`}
                />
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 transition-colors group-hover:text-white">
                  {category.title}
                </h4>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="tech-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
