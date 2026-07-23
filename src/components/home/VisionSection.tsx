import { motion } from "framer-motion";
import { images } from "../../assets/images";
import BubbleText from "../common/BubbleText";
const visionText =
  "We aim to build the world's first simple, accessible, and liquid real estate marketplace — empowering individuals worldwide to invest, trade, and grow wealth across borders. We envision a transparent, trusted global platform where every investor can own fractions of the world's most valuable real estate assets.";

function VisionSection() {
  
  return (
    <section className="relative overflow-hidden bg-[#0d141b] px-6 md:py-14 py-8  text-white">
      <div className="mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto w-fit"
        >
         <BubbleText 
  text="Vision"/>

          <img src={images.hl} alt="" className="w-84" />
        </motion.div>

        
        <motion.h2
          initial={{
            opacity: 0,
            y: 50,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="
            mx-auto
            max-w-5xl
            text-xl
            font-light
            leading-[1.2]
            mt-4
            tracking-tight
            lg:text-[34px]
          "
        >
          We Aim To Build{" "}
          <strong className="font-semibold">
            The World’s First Simple,
            <br />
            Accessible, & Liquid Real Estate Marketplace
          </strong>
        </motion.h2>

        <motion.h3
          initial={{
            opacity: 0,
            y: 40,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            delay: 0.45,
            ease: "easeOut",
          }}
          className="
            mx-auto
            mt-2
            max-w-5xl
            text-xl
            font-light
            leading-[1.2]
            lg:text-[34px]
          "
        >
          <span className="font-bold">—</span> Empowering Individuals Worldwide
          To Invest,
          <br />
          Trade, And Grow Wealth Across Borders.
        </motion.h3>

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
            filter: "blur(6px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            delay: 0.7,
            ease: "easeOut",
          }}
          className="
            mx-auto
            mt-12
            max-w-4xl
            text-sm
            font-light
            leading-relaxed
            text-white/70
          "
        >
          {visionText}
        </motion.p>
      </div>
    </section>
  );
}

export default VisionSection;
