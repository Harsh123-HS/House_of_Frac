import { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

type Feature = {
  id: number;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    id: 1,
    title: "Verified Assets",
    description:
      "Every property undergoes rigorous due diligence to ensure trust, safety, and complete transparency.",
  },
  {
    id: 2,
    title: "Accessible Ownership",
    description:
      "Invest in high-value real estate without heavy capital commitments.",
  },
  {
    id: 3,
    title: "Liquidity & Flexibility",
    description:
      "Trade your shares anytime, making real estate work with the fluidity of modern liquid assets.",
  },
  {
    id: 4,
    title: "Seamless Management",
    description:
      "We handle operations, compliance, and asset oversight so you can focus on growth.",
  },
  {
    id: 5,
    title: "Broker Portals",
    description:
      "Trade your shares anytime, making real estate work with the fluidity of modern liquid assets.",
  },
  {
    id: 6,
    title: "Fractionalization as a Service",
    description:
      "Easily fractionalise your real estate assets through our end-to-end infrastructure, enabling broader investor access and smoother capital formation.",
  },
  {
    id: 7,
    title: "Built for Trust",
    description:
      "Built with a compliance-first approach and industry-grade verification to protect both investors and asset owners.",
  },
  {
    id: 8,
    title: "Property Types",
    description:
      "Residential, commercial, hospitality, and high-yield rental assets — thoughtfully curated for performance and diversification.",
  },
];

function FeatureCard({
  feature,
  index,
  scrollDirection,
}: {
  feature: Feature;
  index: number;
  scrollDirection: "up" | "down";
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // SSR-safe mobile screen detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isInView = useInView(cardRef, {
    amount: isMobile ? 0.2 : 0.25,
  });

  const isLeft = index % 2 === 0;

  const getVariant = () => {
    if (isInView) return "visible";

    if (isMobile) {
      // Mobile: Vertical-only movement to avoid layout shifts & horizontal scrollbars
      return scrollDirection === "down" ? "hiddenBottom" : "hiddenTop";
    }

    if (scrollDirection === "down") {
      return isLeft ? "hiddenBottomLeft" : "hiddenBottomRight";
    } else {
      return isLeft ? "hiddenTopLeft" : "hiddenTopRight";
    }
  };

  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    },

    hiddenBottomLeft: {
      opacity: 0,
      x: -120,
      y: 40,
      scale: 0.96,
    },
    hiddenBottomRight: {
      opacity: 0,
      x: 120,
      y: 40,
      scale: 0.96,
    },
    hiddenTopLeft: {
      opacity: 0,
      x: -160,
      y: -60,
      scale: 0.96,
    },
    hiddenTopRight: {
      opacity: 0,
      x: 160,
      y: -60,
      scale: 0.96,
    },

    // --- Mobile Vertical-Only States ---
    hiddenBottom: {
      opacity: 0,
      x: 0,
      y: 50,
      scale: 0.95,
    },
    hiddenTop: {
      opacity: 0,
      x: 0,
      y: -50,
      scale: 0.95,
    },
  };

  return (
    <motion.article
      ref={cardRef}
      initial={
        isMobile
          ? "hiddenBottom"
          : isLeft
          ? "hiddenBottomLeft"
          : "hiddenBottomRight"
      }
      animate={getVariant()}
      variants={variants}
      transition={{
        type: "spring",
        stiffness: isMobile ? 90 : 70,
        damping: isMobile ? 20 : 18,
        mass: 0.8,
      }}
      className="
        group
        relative
        flex
        min-h-[220px]
        flex-col
        justify-between
        overflow-hidden
        rounded-[16px]
        border
        border-[#343434]
        bg-[#0D0C0B]
        p-6
        sm:p-8
        transition-colors
        duration-300
        hover:border-[#80692F]
        will-change-transform
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          -bottom-16
          -right-12
          h-44
          w-44
          rounded-full
          bg-[#B1872D]
          opacity-20
          blur-[50px]
          transition-opacity
          duration-300
          group-hover:opacity-40
        "
      />

      <div>
        <div
          className="
            relative
            z-10
            flex
            h-[48px]
            w-[48px]
            items-center
            justify-center
            rounded-full
            bg-[#FFB719]
            text-[18px]
            font-semibold
            text-white
            shadow-md
          "
        >
          {String(feature.id).padStart(2, "0")}
        </div>

        <h3
          className="
            relative
            z-10
            mt-5
            text-[20px]
            sm:text-[22px]
            font-semibold
            leading-[1.3]
            text-[#F4F4F4]
          "
        >
          {feature.title}
        </h3>
      </div>

      <p
        className="
          relative
          z-10
          mt-3
          text-[13px]
          sm:text-[14px]
          font-normal
          leading-[1.6]
          text-[#A4A4A4]
        "
      >
        {feature.description}
      </p>
    </motion.article>
  );
}

function WhyChooseHouseOfFrac() {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  // Dynamically update scroll direction
  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? current;
    const diff = current - previous;
    // Add small threshold (2px) to filter micro-jittering
    if (Math.abs(diff) > 2) {
      setScrollDirection(diff > 0 ? "down" : "up");
    }
  });

  return (
    <section
      className="
        relative
        w-full
        overflow-x-hidden
        bg-[#080808]
        px-4
        sm:px-6
        py-[80px]
        md:pt-[30px]
        md:pb-[50px]
        text-white
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.22]
          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:136px_75px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[260px]
          h-[350px]
          w-[300px]
          sm:h-[500px]
          sm:w-[800px]
          -translate-x-1/2
          rounded-full
          bg-[#8B6500]
          opacity-[0.08]
          blur-[100px]
          sm:blur-[150px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[960px]
        "
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 15,
          }}
          className="
            mb-[36px]
            sm:mb-[48px]
            text-center
            text-[32px]
            font-light
            leading-tight
            tracking-[-0.02em]
            text-[#777777]
            sm:text-[46px]
            md:text-[52px]
          "
        >
          Why Choose{" "}
          <span className="font-bold text-white">
            House Of Frac
          </span>
        </motion.h2>

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:gap-6
            md:grid-cols-2
            md:gap-8
          "
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
              scrollDirection={scrollDirection}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseHouseOfFrac;