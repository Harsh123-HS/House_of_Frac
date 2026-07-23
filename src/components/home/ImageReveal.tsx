import { motion } from "framer-motion";
import { images } from "../../assets/images";

const imageParts = [
  {
    src: images.image1,
    className: `
      left-[18%]
      -top-[3%]
      w-[20%]
    `,
    initial: {
      x: -120,
      y: -100,
      rotate: -8,
    },
  },
  {
    src: images.image2,
    className: `
      left-[41%]
      -top-[3%]
      w-[20%]
    `,
    initial: {
      x: 0,
      y: -150,
      rotate: 6,
    },
  },
  {
    src: images.image3,
    className: `
      right-[17%]
      -top-[3%]
      w-[20%]
    `,
    initial: {
      x: 120,
      y: -100,
      rotate: 8,
    },
  },
  {
    src: images.image4,
    className: `
      left-[19%]
      top-[33%]
      w-[32%]
    `,
    initial: {
      x: -150,
      y: 0,
      rotate: -6,
    },
  },
  {
    src: images.image5,
    className: `
      right-[16%]
      top-[33%]
      w-[32%]
    `,
    initial: {
      x: 150,
      y: 0,
      rotate: 6,
    },
  },
  {
    src: images.image6,
    className: `
      left-[14%]
      top-[65%]
      w-[17%]
    `,
    initial: {
      x: -150,
      y: 150,
      rotate: -8,
    },
  },
  {
    src: images.image7,
    className: `
      left-[32%]
      top-[69%]
      w-[19%]
    `,
    initial: {
      x: -50,
      y: 140,
      rotate: 5,
    },
  },
  {
    src: images.image8,
    className: `
      left-[52%]
      top-[69%]
      w-[20%]
    `,
    initial: {
      x: 60,
      y: 150,
      rotate: -5,
    },
  },
  {
    src: images.image9,
    className: `
      right-[10%]
      top-[72%]
      w-[17%]
    `,
    initial: {
      x: 150,
      y: 120,
      rotate: 8,
    },
  },
];

function ImageReveal() {
  return (
    <section className="relative min-h-screen overflow-hidden py-12 bg-[#080808]">
      <div
        className="
          absolute
          left-1/2
          top-4
          h-[500px]
          w-[94%]
          -translate-x-1/2
          rounded-lg
          bg-[linear-gradient(110deg,#C4D6EA_0%,#DCE5E8_45%,#FFF0CF_100%)]
        "
      />

      
      <div
        className="
          relative
          mx-auto
          h-[760px]
          w-full
          max-w-[1200px]
        "
      >
        {imageParts.map((image, index) => (
          <motion.img
            key={image.src}
            src={image.src}
            alt=""
            className={`
              absolute
              ${image.className}
              h-auto
              object-contain
            `}
            initial={{
              opacity: 0,
              scale: 0.8,
              ...image.initial,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.1,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default ImageReveal;