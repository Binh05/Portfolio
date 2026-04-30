import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GitBranch, ExternalLink, Users, User } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  subtitle: string;
  role: string;
  teamInfo: string;
  teamIcon: React.ReactNode;
  description: string[];
  techStack: string[];
  links: { label: string; url: string; icon: React.ReactNode }[];
  accentColor: string;
  glowClass: string;
}

const projects: Project[] = [
  {
    title: "FabricIO",
    subtitle: "Web Gaming & Social Platform",
    role: "Backend Developer (ASP.NET Core)",
    teamInfo: "Team of 5",
    teamIcon: <Users className="h-4 w-4" />,
    description: [
      "Designed normalized database schemas for User & Game Distribution modules",
      "Implemented stateless JWT authentication with access/refresh token strategy",
      "Integrated MinIO object storage for user-generated content handling",
      "Designed layered architecture using Repository + Unit of Work patterns",
      "Containerized with Docker Compose (PostgreSQL, MinIO, Nginx)",
    ],
    techStack: ["ASP.NET Core", "PostgreSQL", "JWT", "MinIO", "C#", "Docker"],
    links: [
      {
        label: "Source Code",
        url: "https://github.com/Binh05/FabricIO-api",
        icon: <GitBranch className="h-4 w-4" />,
      },
    ],
    accentColor: "cyan",
    glowClass: "glow-cyan",
  },
  {
    title: "BMessage",
    subtitle: "Real-time Chat Application",
    role: "Full-stack Developer",
    teamInfo: "Solo project",
    teamIcon: <User className="h-4 w-4" />,
    description: [
      "Engineered real-time bidirectional messaging with Socket.IO",
      "Built secure RESTful APIs with Node.js and JWT authentication",
      "Developed responsive, mobile-friendly UI with Next.js and Shadcn UI",
      "Managed global state efficiently with Redux Toolkit",
    ],
    techStack: [
      "Next.js",
      "Node.js",
      "Socket.IO",
      "MongoDB",
      "JWT",
      "Redux Toolkit",
      "Shadcn UI",
    ],
    links: [
      {
        label: "Frontend",
        url: "https://github.com/Binh05/bmessage",
        icon: <GitBranch className="h-4 w-4" />,
      },
      {
        label: "Backend",
        url: "https://github.com/Binh05/bmessage-api",
        icon: <GitBranch className="h-4 w-4" />,
      },
      {
        label: "Live Demo",
        url: "https://bmessage-api.onrender.com/",
        icon: <ExternalLink className="h-4 w-4" />,
      },
    ],
    accentColor: "purple",
    glowClass: "glow-purple",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;
  const borderColor = isEven
    ? "hover:border-cyan-500/30"
    : "hover:border-purple-500/30";

  return (
    <div
      className={`project-card glass-card ${project.glowClass} group overflow-hidden transition-all duration-500 hover:-translate-y-1 ${borderColor}`}
    >
      {/* Top Accent Bar */}
      <div
        className={`h-1 w-full bg-linear-to-r ${
          isEven ? "from-cyan-500 to-blue-500" : "from-purple-500 to-pink-500"
        }`}
      />

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              {project.title}
            </h3>
            <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400">
              {project.teamIcon}
              {project.teamInfo}
            </div>
          </div>
          <p
            className={`text-sm font-medium ${
              isEven ? "text-cyan-400" : "text-purple-400"
            }`}
          >
            {project.subtitle}
          </p>
          <p className="text-xs text-gray-500">{project.role}</p>
        </div>

        {/* Description */}
        <ul className="mb-6 space-y-2">
          {project.description.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-gray-300"
            >
              <span
                className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                  isEven ? "bg-cyan-400" : "bg-purple-400"
                }`}
              />
              {item}
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        <div className="mb-6">
          <p className="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 border-t border-white/5 pt-6">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                link.label === "Live Demo"
                  ? "border-purple-500/30 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20"
                  : "border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".project-card",
        { y: 80, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: "power3.out",
        }
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="projects"
      className="bg-background relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/8 blur-[150px]" />

      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold tracking-[0.3em] text-purple-400 uppercase">
            What I've built
          </p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            Real-world applications I've designed and developed, from gaming
            platforms to real-time communication systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
