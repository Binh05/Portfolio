import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP, TextPlugin);

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const typeRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // 1. Chữ hiện lên mờ dần và bay lên từ dưới
      tl.from(".hero-text", {
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // 2. Hiệu ứng gõ chữ (Typing effect) cho chức danh
      tl.to(typeRef.current, {
        text: {
          value: "A Creative Web Developer.",
          delimiter: "",
        },
        opacity: 1,
        duration: 2,
        ease: "none",
        delay: 0.2,
      });

      // 3. Hiệu ứng con trỏ nhấp nháy
      gsap.to(".cursor", {
        opacity: 0,
        ease: "steps(1)",
        repeat: -1,
        duration: 0.5,
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="hero"
      className="bg-background relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden"
    >
      {/* Glowing Neon Background (Glassmorphism concept) */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[120px]" />
      <div className="absolute top-1/3 left-1/3 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div>
        <div className="flex">
          {/* Avatar
          <div className="hero-text mb-8 h-full overflow-hidden rounded-full border-2 border-white/20 bg-white/5 p-1 shadow-[0_0_30px_rgba(168,85,247,0.3)] backdrop-blur-md md:mb-10">
            <img
              src="/avatar.png"
              alt="Nguyen Thanh Binh"
              className="h-32 w-32 rounded-full object-cover md:h-40 md:w-40"
            />
          </div> */}
          {/* Info */}
          <div className="flex flex-col text-center">
            <div>
              {/* Lời chào */}
              <h2 className="hero-text text-muted-foreground mb-4 text-lg font-medium tracking-[0.3em] uppercase md:text-xl">
                Hi, I am
              </h2>
              {/* Tên chính - Bự và Gradient */}
              <h1 className="hero-text bg-linear-to-br from-white via-white to-gray-500 bg-clip-text pb-2 text-5xl font-black tracking-tighter text-transparent md:text-7xl lg:text-8xl">
                NGUYEN THANH BINH
              </h1>
              {/* Phần chức danh (Hiệu ứng typing) */}
              <div className="hero-text mt-4 flex h-[48px] items-center justify-center text-2xl font-light text-cyan-400 md:text-3xl lg:text-4xl">
                <span ref={typeRef}></span>
                <span className="cursor ml-1 inline-block h-[30px] w-[3px] bg-cyan-400 md:h-[40px]"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Mũi tên scroll down */}
        <div className="hero-text mt-16">
          <a
            href="#evolution"
            className="text-muted-foreground flex animate-bounce flex-col items-center gap-2 transition-colors hover:text-cyan-400"
          >
            <span className="text-sm font-medium tracking-widest uppercase">
              Scroll Down
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
