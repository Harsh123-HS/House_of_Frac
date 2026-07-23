import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";

import { images } from "../../assets/images";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Track page scroll to toggle header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[linear-gradient(140deg,#C4D6EA_0%,#DCE5E8_55%,#FFF0CF_100%)] shadow-md"
          : "bg-transparent shadow-none"
      }`}
    >
      <div className="mx-auto flex h-16 items-center justify-between px-6 sm:h-20 lg:px-8 max-w-7xl">
        <div className="flex items-center gap-12">
          <Link to="/" onClick={closeMenu} className="shrink-0">
            <img
              src={images.logo}
              alt="House of Frac"
              className="h-auto w-36 sm:w-48  "
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <Link
              to="/"
              className="text-sm font-medium text-black transition-opacity hover:opacity-80"
            >
              How it works
            </Link>

            <Link
              to="/"
              className="text-sm font-medium text-black transition-opacity hover:opacity-80"
            >
              About
            </Link>

            <Link
              to="/"
              className="text-sm font-medium text-black transition-opacity hover:opacity-80"
            >
              Support
            </Link>
          </nav>
        </div>

        <div className="hidden items-center gap-10 lg:flex">
          <Link
            to="/"
            className="text-sm font-semibold text-black transition-opacity hover:opacity-80"
          >
            Login
          </Link>

          <Link
            to="/"
            className="
              rounded-xl
              bg-[linear-gradient(180deg,#2A5A8D_0%,#4F86C0_100%)]
              px-8
              py-3
              text-sm
              font-semibold
              text-[#ffffff]
              transition
              hover:bg-opacity-90
            "
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center p-2 text-black lg:hidden focus:outline-none"
          aria-label="Open menu"
        >
          <Menu className="h-7 w-7 text-black" />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 z-50 flex h-full w-[280px] sm:w-[320px] flex-col justify-between bg-[#C4D6EA] p-6 text-black shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between border-b border-black/20 pb-6">
            <Link to="/" onClick={closeMenu}>
              <img
                src={images.logo}
                alt="House of Frac"
                className="h-auto w-32 "
              />
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              className="rounded-lg p-2 text-black hover:bg-black/10 focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-6">
            <Link
              to="/"
              onClick={closeMenu}
              className="text-base font-medium text-black transition-colors hover:text-black/80"
            >
              How it works
            </Link>

            <Link
              to="/"
              onClick={closeMenu}
              className="text-base font-medium text-black transition-colors hover:text-black/80"
            >
              About
            </Link>

            <Link
              to="/"
              onClick={closeMenu}
              className="text-base font-medium text-black transition-colors hover:text-black/80"
            >
              Support
            </Link>
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-black/20 pt-6">
          <Link
            to="/"
            onClick={closeMenu}
            className="w-full text-center text-sm font-semibold text-black transition hover:text-black/80"
          >
            Login
          </Link>

          <Link
            to="/"
            onClick={closeMenu}
            className="
              w-full
              rounded-xl
             bg-[linear-gradient(360deg,#2A5A8D_0%,#4F86C0_100%)]
              py-3
              text-center
              text-sm
              font-semibold
              text-white
              shadow-md
              transition
              hover:bg-opacity-90
            "
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;