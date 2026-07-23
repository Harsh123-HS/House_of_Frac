import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import InvestmentCard from "./InvestmentCards";
import { properties } from "../../constants/properties";
import BubbleText from "../common/BubbleText";

gsap.registerPlugin(ScrollTrigger);

function HorizontalCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const cards = cardsRef.current;
      const section = sectionRef.current;
      if (!cards || !section) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const cardElements = gsap.utils.toArray<HTMLElement>(".card-inner");
        const getScrollAmount = () => cards.scrollWidth - window.innerWidth;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getScrollAmount()}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(
          cards,
          {
            x: () => -getScrollAmount(),
            ease: "none",
          },
          0,
        );

        if (progressRef.current) {
          tl.to(
            progressRef.current,
            {
              scaleX: 1,
              ease: "none",
            },
            0,
          );
        }

        cardElements.forEach((card) => {
          gsap.fromTo(
            card,
            {
              rotateY: 10,
              scale: 0.92,
              opacity: 0.8,
            },
            {
              rotateY: -10,
              scale: 1,
              opacity: 1,
              ease: "power1.out",
              scrollTrigger: {
                trigger: card,
                containerAnimation: tl,
                start: "left 90%",
                end: "right 10%",
                scrub: true,
              },
            },
          );
        });
      });

      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          y: -20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        });
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        flex
        h-auto
        w-full
        flex-col
        justify-between
        overflow-hidden
        bg-gradient-to-b
        from-[#111820]
        to-[#111113]
        py-4
        text-white
        md:h-screen
        md:py-6
      "
    >
      <div className="pointer-events-none absolute -left-40 top-1/4 h-72 w-72 rounded-full bg-[#1E4166]/20 blur-[100px] md:h-96 md:w-96 md:blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-72 w-72 rounded-full bg-[#B89B4E]/10 blur-[100px] md:h-96 md:w-96 md:blur-[120px]" />

      <div ref={headerRef} className="relative z-10 shrink-0 text-center">
        <BubbleText ref={headingRef} text="Property" />

        <div
          ref={lineRef}
          className="relative mx-auto mt-2 h-px w-full max-w-[200px] bg-[#4B3B1D] sm:mt-3 sm:max-w-[380px] lg:max-w-[620px]"
        >
          <span
            ref={dotRef}
            className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 translate-x-1/2 rounded-full border border-[#80692F] bg-[#080A0C] sm:h-5 sm:w-5"
          />
        </div>

      
        <p className="mx-auto mt-2 max-w-2xl px-6 text-xs text-gray-400 sm:mt-4 sm:text-sm">
          Lorem ipsum dolor sit amet consectetur. Justo sed tempus nam eget
          maecenas eleifend ac sed. Sollicitudin lacinia ultricies tristique
          duis.
        </p>
      </div>

      <div className="relative my-4 flex flex-1 items-center overflow-x-auto no-scrollbar md:my-auto md:overflow-hidden [perspective:1200px]">
        <div
          ref={cardsRef}
          className="flex items-center gap-4 px-4 sm:gap-8 sm:px-14 will-change-transform"
        >
          {properties.map((property) => (
            <div
              key={property.id}
              className="card-wrapper shrink-0 max-w-[280px] sm:max-w-none [transform-style:preserve-3d]"
            >
              <div className="card-inner transition-shadow duration-300 hover:z-20">
                <InvestmentCard property={property} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 shrink-0 px-4 py-2 sm:px-14 sm:py-6 hidden md:block">
        <div className="flex items-center justify-between text-xs font-mono text-gray-400">
          <span>01</span>
          <div className="mx-4 h-[2px] flex-1 overflow-hidden rounded-full bg-white/10">
            <div
              ref={progressRef}
              className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-[#1E4166] to-[#B89B4E]"
            />
          </div>
          <span>{String(properties.length).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}

export default HorizontalCards;