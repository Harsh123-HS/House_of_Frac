import { forwardRef, useState } from "react";

interface BubbleTextProps {
  text: string;
  className?: string;
}

const BubbleText = forwardRef<HTMLHeadingElement, BubbleTextProps>(
  ({ text, className = "" }, ref) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
      <h2
        ref={ref}
        data-text={text}
        className={`
          relative
          inline-block
          select-none
          whitespace-nowrap
          text-[32px]
          font-semibold
          uppercase
          leading-none
          tracking-[0.02em]
          text-[#080B0F]

          xs:text-[40px]
          sm:text-[54px]
          md:text-[64px]
          lg:text-[80px]
          xl:text-[92px]

          after:pointer-events-none
          after:absolute
          after:inset-0
          after:z-0
          after:flex
          after:items-center
          after:justify-center
          after:text-transparent
          after:content-[attr(data-text)]
          after:[-webkit-text-stroke:1px_#B89B4E]
          after:[mask-image:linear-gradient(to_bottom,black_50%,rgba(0,0,0,0)_100%)]
          after:[-webkit-mask-image:linear-gradient(to_bottom,black_50%,rgba(0,0,0,0)_100%)]

          ${className}
        `}
      >
        {text.split("").map((char, index) => {
          const isHovered = hoveredIndex === index;
          const isNeighbor =
            hoveredIndex !== null && Math.abs(hoveredIndex - index) === 1;

          return (
            <span
              key={`${char}-${index}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                relative
                z-10
                inline-block
                transition-transform
                duration-200
                ease-out

                ${
                  isHovered
                    ? "-translate-y-2 scale-125 text-[#B89B4E]"
                    : isNeighbor
                    ? "-translate-y-1 scale-110 text-[#6F6F6F]"
                    : "translate-y-0 scale-100 text-[#080B0F]"
                }
              `}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          );
        })}
      </h2>
    );
  }
);

BubbleText.displayName = "BubbleText";

export default BubbleText;