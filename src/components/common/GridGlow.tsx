function GridGlow() {
  return (
    <div className="pointer-events-none absolute h-[180px] w-[180px]">
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#252525]" />

      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#252525]" />

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-1
          w-1
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#9A761E]
          shadow-[0_0_45px_25px_rgba(154,118,30,0.22)]
        "
      />
    </div>
  );
}

export default GridGlow;