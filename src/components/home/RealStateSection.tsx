import { motion } from "framer-motion";
import GridGlow from "../common/GridGlow";
import { images } from "../../assets/images";
import BubbleText from "../common/BubbleText";

function RealEstateSection() {
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (delay) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.1, ease: "easeInOut", delay },
        opacity: { duration: 0.2, delay },
      },
    }),
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8, scale: 0.95 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay },
    }),
  };

  return (
    <section className="relative md:min-h-[900px] overflow-hidden bg-[#080B0F] pb-12 md:pb-2 text-white select-none">
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-30
          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:145px_75px]
        "
      />

      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[12%] top-[5%]"
      >
        <GridGlow />
      </motion.div>

      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute right-[1%] top-[25%]"
      >
        <GridGlow />
      </motion.div>

      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="pointer-events-none absolute left-[80%] top-[5%]"
      >
        <GridGlow />
      </motion.div>

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center px-4 md:px-6 pt-16 md:pt-28 text-center">
        <div
          className="relative"
        >
          <BubbleText text="House Of Frac"/>

          <motion.img
            initial={{ opacity: 0, scaleX: 0.8, x: "-50%" }}
            whileInView={{ opacity: 1, scaleX: 1, x: "-50%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            src={images.hl2}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-full mt-2 w-full max-w-[890px]"
          />
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="
            mt-12
            md:mt-16
            max-w-[1000px]
            text-xl
            sm:text-3xl
            md:text-4xl
            font-medium
            leading-[1.3]
            tracking-[-0.02em]
            text-white
            lg:text-[34px]
          "
        >
          Turns Real Estate Into Accessible, Tradable,
          <br className="hidden sm:inline" />
          {" "}Income-Generating Opportunities —
          <br className="hidden sm:inline" />
          {" "}Available To Anyone With A Tap!
        </motion.h3>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 hidden w-full max-w-[850px] px-4 lg:block"
        >
          <svg
            className="h-auto w-full overflow-visible"
            viewBox="0 0 800 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E5C778" />
                <stop offset="50%" stopColor="#B89B4E" />
                <stop offset="100%" stopColor="#8A6F2F" />
              </linearGradient>

              <filter id="goldGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComponentTransfer in="blur" result="glow">
                  <feFuncA type="linear" slope="0.8" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <motion.path
              d="M 400 68 L 400 180 L 230 180 L 230 220"
              stroke="url(#goldGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#goldGlow)"
              variants={lineVariants}
              custom={0.3}
            />

            <motion.path
              d="M 230 270 L 230 380 L 570 380 L 570 415"
              stroke="url(#goldGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#goldGlow)"
              variants={lineVariants}
              custom={1.3}
            />

            <motion.circle
              r="4"
              fill="#FFF0BA"
              filter="url(#goldGlow)"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                offsetDistance: ["0%", "100%"],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.5,
              }}
              style={{
                offsetPath: "path('M 400 68 L 400 180 L 230 180 L 230 380 L 570 380 L 570 415')",
              }}
            />

            <g>
              <motion.line
                x1="365" y1="68" x2="435" y2="68"
                stroke="url(#goldGradient)" strokeWidth="2.5" filter="url(#goldGlow)"
                variants={itemVariants} custom={0.2}
              />
              <motion.text
                x="400" y="48"
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="22"
                fontWeight="600"
                letterSpacing="-0.01em"
                className="select-none"
                variants={itemVariants} custom={0.1}
              >
                Invest Small
              </motion.text>
            </g>

            <g>
              <motion.line
                x1="160" y1="220" x2="300" y2="220"
                stroke="url(#goldGradient)" strokeWidth="2.5" filter="url(#goldGlow)"
                variants={itemVariants} custom={0.9}
              />
              <motion.text
                x="230" y="250"
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="22"
                fontWeight="600"
                letterSpacing="-0.01em"
                className="select-none"
                variants={itemVariants} custom={1.0}
              >
                Diversify Instantly
              </motion.text>
              <motion.line
                x1="160" y1="270" x2="300" y2="270"
                stroke="url(#goldGradient)" strokeWidth="2.5" filter="url(#goldGlow)"
                variants={itemVariants} custom={1.1}
              />
            </g>

            <g>
              <motion.line
                x1="510" y1="415" x2="630" y2="415"
                stroke="url(#goldGradient)" strokeWidth="2.5" filter="url(#goldGlow)"
                variants={itemVariants} custom={1.8}
              />
              <motion.text
                x="570" y="445"
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="22"
                fontWeight="600"
                letterSpacing="-0.01em"
                className="select-none"
                variants={itemVariants}
                custom={1.9}
              >
                Withdraw Anytime
              </motion.text>
            </g>
          </svg>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 flex w-full max-w-sm flex-col items-center gap-6 lg:hidden"
        >
          <motion.div
            variants={itemVariants}
            custom={0.1}
            className="flex flex-col items-center"
          >
            <span className="text-xl font-semibold text-white">Invest Small</span>
            <div className="mt-2 h-[2px] w-20 bg-gradient-to-r from-[#E5C778] via-[#B89B4E] to-[#8A6F2F] shadow-[0_0_8px_#B89B4E]" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            custom={0.5}
            className="h-10 w-[2px] bg-gradient-to-b from-[#E5C778] via-[#B89B4E] to-[#8A6F2F] shadow-[0_0_8px_#B89B4E]"
          />

          <motion.div
            variants={itemVariants}
            custom={0.9}
            className="flex flex-col items-center"
          >
            <div className="h-[2px] w-32 bg-gradient-to-r from-[#E5C778] via-[#B89B4E] to-[#8A6F2F] shadow-[0_0_8px_#B89B4E]" />
            <span className="my-2 text-xl font-semibold text-white">
              Diversify Instantly
            </span>
            <div className="h-[2px] w-32 bg-gradient-to-r from-[#E5C778] via-[#B89B4E] to-[#8A6F2F] shadow-[0_0_8px_#B89B4E]" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            custom={1.4}
            className="h-10 w-[2px] bg-gradient-to-b from-[#E5C778] via-[#B89B4E] to-[#8A6F2F] shadow-[0_0_8px_#B89B4E]"
          />

          <motion.div
            variants={itemVariants}
            custom={1.8}
            className="flex flex-col items-center"
          >
            <div className="mb-2 h-[2px] w-28 bg-gradient-to-r from-[#E5C778] via-[#B89B4E] to-[#8A6F2F] shadow-[0_0_8px_#B89B4E]" />
            <span className="text-xl font-semibold text-white">
              Withdraw Anytime
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default RealEstateSection;