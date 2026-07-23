import { Link } from "react-router-dom";
import { images } from "../../assets/images";

function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#050505] text-white">
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-0
          h-full
          max-h-[420px]
          bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,174,0,0.65)_0%,rgba(238,157,0,0.5)_25%,rgba(177,122,0,0.28)_48%,rgba(80,55,0,0.1)_70%,transparent_100%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          opacity-30
          [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
          [background-size:75px_75px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1440px]
          px-6
          py-12
          md:py-16
          lg:px-28
          lg:py-20
        "
      >
        <div className="flex flex-col items-center text-center">
          <h2
            className="
              mx-auto
              max-w-3xl
              text-xl
              font-medium
              leading-snug
              tracking-wide
              text-white
              sm:text-2xl
              md:text-3xl
            "
          >
            Turn your property into a liquid, investable
            <br className="hidden md:block" />
            {" "}asset with our end-to-end infrastructure.
          </h2>

          <Link
            to="/"
            className="
              mt-6
              flex
              items-center
              gap-3
              rounded-full
              bg-white
              py-1
              pl-1
              pr-5
              text-brand-dark
              transition-transform
              duration-300
              hover:scale-105
            "
          >
            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[#0B0B0B]
              "
            >
              <img
                src={images.arrow}
                alt=""
                className="h-5 w-5 object-contain"
              />
            </span>

            <span className="text-base font-normal">
              Explore Properties
            </span>
          </Link>
        </div>

        <div
          className="
            mt-16
            flex
            flex-col
            items-center
            justify-center
            gap-4
            sm:flex-row
            sm:gap-8
            md:mt-24
          "
        >
          <Link to="/" className="shrink-0">
            <img
              src={images.footerlogo}
              alt="House of Frac"
              className="w-[130px] object-contain md:w-[150px]"
            />
          </Link>

          <span className="hidden h-6 w-[1px] bg-white/20 sm:block" />

=          <p
            className="
              text-center
              text-lg
              font-light
              italic
              text-[#D4D4D4]
              sm:text-left
              md:text-xl
            "
          >
            The Marketplace for Real-World Assets
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;