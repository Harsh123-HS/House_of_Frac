import GridGlow from "../common/GridGlow";

function InvestmentJourney() {
  return (
    <section className="relative overflow-hidden bg-[#080B0F] py-12 text-white sm:py-16 lg:py-20">
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-30
          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:145px_77px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[12%]
          top-[25%]
          h-1
          w-1
          rounded-full
          bg-[#B1872D]
          shadow-[0_0_80px_45px_rgba(177,135,45,0.18)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[25%]
          h-1
          w-1
          rounded-full
          bg-[#B1872D]
          shadow-[0_0_80px_45px_rgba(177,135,45,0.18)]
        "
      />

      <div className="absolute left-[8%] top-[100px] hidden sm:block">
        <GridGlow />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6">
        <p
          className="
            mx-auto
            max-w-4xl
            text-center
            text-sm
            font-light
            text-[#fdfdfd]
            sm:text-base
            lg:text-[16px]
          "
        >
          We make property investment simple, accessible, and liquid, empowering
          everyone to own and grow like never before.
        </p>

        <div
          className="
            mx-auto
            mt-6
            h-px
            w-full
            max-w-[280px]
            bg-gradient-to-r
            from-transparent
            via-[#80692F]
            to-transparent
            sm:max-w-[360px]
            lg:w-[460px]
          "
        />

        <div className="relative mx-auto mt-12 flex max-w-md flex-col items-center gap-12 lg:hidden">
          <div className="absolute top-4 bottom-4 left-1/2 h-[calc(100%-32px)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#80692F] to-transparent opacity-60" />

          <div className="relative z-10 flex w-full flex-col items-center">
            <div className="relative rounded-lg border border-[#80692F]/40 bg-[#080B0F]/90 px-6 py-3 text-center backdrop-blur-sm">
              <div className="absolute -top-px left-1/2 h-px w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#80692F] to-transparent" />
              <h1 className="text-xl font-medium tracking-wide sm:text-2xl">Invest Small</h1>
              <div className="absolute -bottom-px left-1/2 h-px w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#80692F] to-transparent" />
            </div>
          </div>

          <div className="relative z-10 flex w-full flex-col items-center">
            <div className="relative rounded-lg border border-[#80692F]/40 bg-[#080B0F]/90 px-6 py-3 text-center backdrop-blur-sm">
              <div className="absolute -top-px left-1/2 h-px w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#80692F] to-transparent" />
              <h1 className="text-xl font-medium tracking-wide sm:text-2xl">Diversify Instantly</h1>
              <div className="absolute -bottom-px left-1/2 h-px w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#80692F] to-transparent" />
            </div>
          </div>

          <div className="relative z-10 flex w-full flex-col items-center">
            <div className="relative rounded-lg border border-[#80692F]/40 bg-[#080B0F]/90 px-6 py-3 text-center backdrop-blur-sm">
              <div className="absolute -top-px left-1/2 h-px w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#80692F] to-transparent" />
              <h1 className="text-xl font-medium tracking-wide sm:text-2xl">Withdraw Anytime</h1>
              <div className="absolute -bottom-px left-1/2 h-px w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#80692F] to-transparent" />
            </div>
          </div>
        </div>

        <div className="relative hidden lg:mx-auto lg:mt-16 lg:block lg:h-[430px] lg:min-h-[430px] lg:max-w-[900px]">
          <div className="absolute left-1/2 top-[48px] h-[64px] w-px -translate-x-1/2 bg-[#80692F]" />
          <div className="absolute left-1/2 top-full mt-2 h-px w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#80692F] to-transparent" />

          <div className="absolute left-1/2 top-2 -translate-x-1/2">
            <div
              className="
                absolute
                bottom-full
                left-1/2
                mb-2
                h-px
                w-20
                -translate-x-1/2
                bg-gradient-to-r
                from-[#080B0F]
                via-[#80692F]
                to-[#080B0F]
              "
            />

            <h1 className="text-xl whitespace-nowrap">Invest Small</h1>

            <div
              className="
                absolute
                left-1/2
                top-full
                mt-2
                h-px
                w-20
                -translate-x-1/2
                bg-gradient-to-r
                from-[#080B0F]
                via-[#80692F]
                to-[#080B0F]
              "
            />
          </div>

          <div className="absolute left-1/2 top-[40px] h-[64px] w-px -translate-x-1/2 bg-[#80692F]" />
          <div className="absolute left-[calc(50%-115px)] top-[102px] h-px w-[115px] bg-gradient-to-r from-[#80692F] via-[#A98A45] to-[#80692F]" />
          <div className="absolute left-[calc(50%-115px)] top-[102px] h-[72px] w-px bg-[#80692F]" />

          <div
            className="
              absolute
              left-[calc(50%-115px)]
              top-[175px]
              -translate-x-1/2
            "
          >
            <div
              className="
                absolute
                bottom-full
                left-1/2
                h-px
                w-10
                -translate-x-1/2
                bg-gradient-to-r
                from-[#080B0F]
                via-[#80692F]
                to-[#080B0F]
              "
            />

            <h1 className="text-xl whitespace-nowrap">Diversify Instantly</h1>

            <div
              className="
                absolute
                left-1/2
                top-full
                mt-2
                h-px
                w-10
                -translate-x-1/2
                bg-gradient-to-r
                from-[#080B0F]
                via-[#80692F]
                to-[#080B0F]
              "
            />
          </div>

          <div className="absolute left-[calc(50%-115px)] top-[208px] h-[62px] w-px bg-[#80692F]" />
          <div className="absolute left-[calc(50%-115px)] top-[270px] h-px w-[215px] bg-[#80692F]" />
          <div className="absolute left-[calc(50%+100px)] top-[270px] h-[65px] w-px bg-[#80692F]" />

          <div
            className="
              absolute
              left-[calc(50%+100px)]
              top-[343px]
              -translate-x-1/2
            "
          >
            <div
              className="
                absolute
                bottom-full
                left-1/2
                mb-2
                h-px
                w-20
                -translate-x-1/2
                bg-gradient-to-r
                from-[#080B0F]
                via-[#80692F]
                to-[#080B0F]
              "
            />

            <h1 className="text-xl whitespace-nowrap">Withdraw Anytime</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InvestmentJourney;