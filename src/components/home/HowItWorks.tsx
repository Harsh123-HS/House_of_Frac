import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { images } from "../../assets/images";
import BubbleText from "../common/BubbleText";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Discover",
    description:
      "Explore a global selection of verified real estate assets, pre-screened for performance and compliance, with complete due diligence.",
    icon: images.frame,
  },
  {
    title: "Invest",
    description:
      "Own fractions of premium properties with ease and flexibility, starting from accessible entry amounts.",
    icon: images.frame1,
  },
  {
    title: "Earn & Trade",
    description:
      "Generate passive income, benefit from appreciation, and unlock liquidity by trading your ownership shares whenever you choose.",
    icon: images.frame2,
  },
  {
    title: "Track",
    description:
      "Monitor your portfolio through an intuitive dashboard with real-time updates, performance insights, and transparent reporting.",
    icon: images.frame3,
  },
];

function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      // 1. Heading Reveal
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // 2. Heading Bottom Line Scale & End Dot Pulse
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0, transformOrigin: "center position" },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: lineRef.current,
              start: "top 85%",
            },
          }
        );
      }

      if (dotRef.current) {
        gsap.fromTo(
          dotRef.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            delay: 0.8,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: lineRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // 3. Step Columns Staggered Cascade
      stepRefs.current.forEach((step, index) => {
        if (!step) return;

        const borderDot = step.querySelector(".golden-dot");
        const iconBox = step.querySelector(".icon-box");
        const title = step.querySelector(".step-title");
        const desc = step.querySelector(".step-desc");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
          },
        });

        tl.fromTo(
          step,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.12,
            ease: "power3.out",
          }
        );

        if (borderDot) {
          tl.fromTo(
            borderDot,
            { scale: 0, boxShadow: "0 0 0px 0px rgba(201,150,28,0)" },
            {
              scale: 1,
              boxShadow: "0 0 20px 8px rgba(201,150,28,0.5)",
              duration: 0.4,
              ease: "back.out(2)",
            },
            "-=0.4"
          );
        }

        if (iconBox) {
          tl.fromTo(
            iconBox,
            { scale: 0.7, opacity: 0, rotate: -8 },
            {
              scale: 1,
              opacity: 1,
              rotate: 0,
              duration: 0.6,
              ease: "back.out(1.7)",
            },
            "-=0.3"
          );

          // Continuous Floating Effect
          gsap.to(iconBox, {
            y: -6,
            duration: 2.5 + index * 0.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 1.2,
          });
        }

        if (title || desc) {
          tl.fromTo(
            [title, desc].filter(Boolean),
            { y: 15, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.08,
              ease: "power2.out",
            },
            "-=0.3"
          );
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#080A0C] text-white"
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-30
          sm:opacity-40
          [background-image:linear-gradient(to_right,rgba(126,94,25,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(126,94,25,0.16)_1px,transparent_1px)]
          [background-size:120px_100%]
          md:[background-size:200px_100%]
          lg:[background-size:326px_100%]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 pt-8  sm:px-8 sm:py-16 md:px-12 lg:px-16 lg:py-20">
        
        <div className="relative text-center">
         <BubbleText ref={headingRef}
  text="How it Works"/>

          <div
            ref={lineRef}
            className="relative mx-auto mt-4 h-px w-full max-w-[280px] bg-[#4B3B1D] sm:mt-6 sm:max-w-[600px] lg:max-w-[960px]"
          >
            <span
              ref={dotRef}
              className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 translate-x-1/2 rounded-full border border-[#80692F] bg-[#080A0C] sm:h-6 sm:w-6"
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col space-y-8 pl-4 sm:pl-8 md:space-y-10 lg:hidden">
          {steps.map((step, index) => (
            <div
              key={`mobile-${step.title}`}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              className="relative border-l border-[#3A2D17] pl-6 sm:pl-10"
            >
              <div className="golden-dot absolute -left-[6px] top-6 h-3 w-3 rounded-full bg-[#C9961C] shadow-[0_0_15px_6px_rgba(201,150,28,0.35)]" />

              <div className="flex flex-col items-start">
                <span className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#B89B4E]">
                  Step 0{index + 1}
                </span>

                <div
                  className="
                    icon-box
                    mb-4
                    flex
                    h-[64px]
                    w-[64px]
                    items-center
                    justify-center
                    rounded-[14px]
                    bg-gradient-to-br
                    from-[#1E4166]
                    to-[#17304C]
                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]
                    sm:h-[72px]
                    sm:w-[72px]
                  "
                >
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="h-10 w-10 object-contain sm:h-12 sm:w-12"
                  />
                </div>

                <h3 className="step-title mb-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {step.title}
                </h3>

                <p className="step-desc max-w-md text-sm font-light leading-relaxed text-[#9A9A9A] sm:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 hidden grid-cols-4 lg:grid">
          {steps.map((step, index) => (
            <div
              key={`desktop-${step.title}`}
              ref={(el) => {
                if (window.innerWidth >= 1024) {
                  stepRefs.current[index] = el;
                }
              }}
              className="
                relative
                min-h-[420px]
                border-l
                border-[#3A2D17]
                px-8
                pt-0
                last:border-r
              "
            >
              <div className="golden-dot absolute -left-[7px] top-[100px] h-3 w-3 rounded-full bg-[#C9961C] shadow-[0_0_15px_6px_rgba(201,150,28,0.35)]" />

              <div
                className={`${
                  index === 0
                    ? "pt-0"
                    : index === 1
                    ? "pt-14"
                    : index === 2
                    ? "pt-28"
                    : "pt-40"
                }`}
              >
                <div
                  className="
                    icon-box
                    mb-7
                    flex
                    h-[84px]
                    w-[84px]
                    items-center
                    justify-center
                    rounded-[17px]
                    bg-gradient-to-br
                    from-[#1E4166]
                    to-[#17304C]
                    shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]
                    transition-shadow
                    duration-300
                    hover:shadow-[0_0_25px_rgba(30,65,102,0.6)]
                  "
                >
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="h-14 w-14 object-contain"
                  />
                </div>

                <h3 className="step-title mb-6 text-3xl font-semibold tracking-tight">
                  {step.title}
                </h3>

                <p className="step-desc max-w-[260px] text-sm font-light leading-[1.35] text-[#9A9A9A]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;