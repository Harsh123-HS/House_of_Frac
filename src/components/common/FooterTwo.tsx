import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

function FooterTwo() {
  return (
    <footer className="relative overflow-hidden bg-[#0A0A0A] pt-11 text-white">
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 pb-12 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#21374A] text-xl font-bold text-white shadow-md">
                ƒ
              </div>

              <h2 className="text-xl font-bold tracking-wide text-white">
                OUSE OF FRAC
              </h2>
            </div>

            <p className="max-w-[340px] text-[15px] leading-[1.6] text-[#8E8E93]">
              Empowering investors to build wealth through blockchain-secured
              fractional ownership
            </p>

            <div className="mt-8 flex items-center gap-3">
              <SocialIcon>
                <FaXTwitter size={15} />
              </SocialIcon>

              <SocialIcon>
                <FaInstagram size={15} />
              </SocialIcon>

              <SocialIcon>
                <FaYoutube size={15} />
              </SocialIcon>

              <SocialIcon>
                <FaFacebookF size={15} />
              </SocialIcon>
            </div>
          </div>

=          <FooterColumn
            title="Platform"
            links={["How it Works", "Properties", "FAQs"]}
          />

=          <FooterColumn
            title="Company"
            links={["About Us", "Blog", "T&C", "Privacy Policy"]}
          />

          <div>
            <h3 className="mb-6 text-[15px] font-semibold text-white">
              Contact
            </h3>

            <a
              href="mailto:support@hof.com"
              className="text-[14px] text-[#b2b2be] transition-colors duration-300 hover:text-white"
            >
              support@hof.com
            </a>
          </div>
        </div>

      </div>

      <div className="relative w-full overflow-hidden pt-12">
        <h1
          className="
            select-none
            text-center
            text-[clamp(50px,12vw,250px)]
            font-black
            leading-none
            tracking-tight
            text-[#222325]/80
            [mask-image:linear-gradient(to_top,transparent_0%,black_50%)]
          "
        >
          HOUSE OF FRAC
        </h1>
      </div>
    </footer>
  );
}

export default FooterTwo;



function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="
        flex h-9 w-9 items-center justify-center
        rounded-full bg-[#EAEAEA]
        text-[#363535]
        transition-all duration-300
        hover:-translate-y-1
        hover:bg-white
      "
    >
      {children}
    </a>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h3 className="mb-6 text-[15px] font-semibold text-white">
        {title}
      </h3>

      <div className="flex flex-col gap-4">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="
              text-[14px]
              text-[#b6b6be]
              transition-colors
              duration-300
              hover:text-white
            "
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}