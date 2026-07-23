import { images } from "../../assets/images";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section
      className=" relative
        min-h-screen
        overflow-hidden
        lg:overflow-visible
        bg-[linear-gradient(110deg,#C4D6EA_0%,#DCE5E8_45%,#FFF0CF_100%)]
      "
    >
      <div className="mx-auto min-h-screen max-w-[1280px] px-4 sm:px-6 lg:px-12">
        <div className="grid min-h-screen items-center pt-24 pb-12 lg:grid-cols-[45%_55%] lg:py-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-20 pt-4 sm:pt-10 lg:pt-10"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-4 text-sm sm:text-base text-brand-dark lg:mb-7"
            >
              Welcome to <strong className="font-bold">HOUSE OF FRAC</strong>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="
                max-w-[700px]
                text-3xl
                font-bold
                leading-[1.15]
                tracking-[-0.02em]
                text-brand-black
                sm:text-4xl
                lg:text-[50px]
              "
            >
              The Marketplace for Real-World Assets
            </motion.h1>

            <TypeAnimation
              sequence={["Making real assets\nAccessible..._", 2000]}
              wrapper="p"
              speed={50}
              repeat={0}
              className="
                mt-4
                max-w-[430px]
                whitespace-pre-line
                text-2xl
                font-light
                leading-[1.25]
                text-brand-muted
                sm:mt-6
                sm:text-3xl
                lg:mt-8
                lg:text-[42px]
              "
            />

            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="
    group
    mt-8
    flex
    items-center
    gap-4
    rounded-full
    bg-white
    pr-6
    shadow-sm
    hover:shadow-md
    hover:cursor-pointer
    sm:mt-10
    lg:mt-12
  "
            >
              <span
                className="
      flex
      h-12
      w-12
      items-center
      justify-center
      rounded-full
      bg-[#0B0B0B]
      sm:h-14
      sm:w-14
    "
              >
                <img
                  src={images.arrow}
                  alt=""
                  className="
        h-5 
        w-5 
        object-contain 
        transition-transform 
        duration-300 
        ease-out 
        group-hover:rotate-45 
        group-hover:translate-x-0.5 
        sm:h-6 
        sm:w-6
      "
                />
              </span>

              <span className="text-sm font-medium text-brand-dark sm:text-base">
                Explore Properties
              </span>
            </motion.button>
          </motion.div>

          <div className="relative mt-8 flex h-full items-center justify-center lg:mt-0">
            <motion.img
              src={images.home1}
              alt="Modern real estate property"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -12, 0], // Infinite gentle floating loop
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.4 },
                scale: { duration: 0.8, delay: 0.4 },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.03,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="
                relative
                z-10
                w-full
                max-w-md
                translate-x-0
                translate-y-0
                object-contain
                drop-shadow-2xl
                lg:w-[126%]
                lg:max-w-none
                lg:translate-x-4
                lg:translate-y-24
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
