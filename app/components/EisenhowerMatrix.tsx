export default function EisenhowerMatrix() {
  return (
    <div className="grid grid-cols-2 min-h-full relative">
      <div className="matrix-v-line"></div>
      <div className="matrix-h-line"></div>
      <div className="intersection-glow"></div>
      <section className="quadrant-matrix">
        <div className="flex flex-col">
          <h4 className="text-sm font-black text-luminous-cyan flex items-center gap-2 uppercase font-display">
            <span className="size-1.5 rounded-full bg-luminous-cyan shadow-[0_0_10px_#00F5FF]"></span>
            EXECUTE
          </h4>
          <span className="text-[8px] font-black text-luminous-cyan/40 uppercase tracking-[0.2em]">
            Urgent &amp; Important
          </span>
        </div>
      </section>
      <section className="quadrant-matrix">
        <div className="flex flex-col">
          <h4 className="text-sm font-black text-soft-teal flex items-center gap-2 uppercase tracking-widest font-display text-right">
            <span className="size-1.5 rounded-full bg-soft-teal shadow-[0_0_10px_#2DD4BF]"></span>{" "}
            STRATEGIZE
          </h4>
          <span className="text-[8px] font-black text-soft-teal/40 uppercase tracking-[0.2em]">
            Future Focused
          </span>
        </div>
      </section>
      <section className="quadrant-matrix">
        <div className="flex flex-col">
          <h4 className="text-sm font-black text-luminous-violet flex items-center gap-2 uppercase tracking-widest font-display">
            <span className="size-1.5 rounded-full bg-luminous-violet shadow-[0_0_10px_#9D00FF]"></span>
            ASSIGN
          </h4>
          <span className="text-[8px] font-black text-luminous-violet/40 uppercase tracking-[0.2em]">
            Delegate Action
          </span>
        </div>
      </section>
      <section className="quadrant-matrix grow">
        <div className="flex flex-col self-start justify-self-end">
          <h4 className="text-sm font-black text-deep-magenta flex items-center gap-2 uppercase tracking-widest font-display text-right">
            <span className="size-1.5 rounded-full bg-deep-magenta shadow-[0_0_10px_#FF00FF]"></span>
            ARCHIVE
          </h4>
          <span className="text-[8px] font-black text-deep-magenta/40 uppercase tracking-[0.2em]">
            Eliminate Noise
          </span>
        </div>
        <div className="grow justify-self-center"></div>
      </section>
    </div>
  );
}
