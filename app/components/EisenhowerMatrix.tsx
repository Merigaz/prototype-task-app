export default function EisenhowerMatrix() {
  return (
    <div className="grid grid-cols-2 min-h-full relative">
      <div className="matrix-v-line"></div>
      <div className="matrix-h-line"></div>
      <div className="intersection-glow"></div>
      <section className="quadrant-matrix">
        <div className="flex flex-col mb-4">
          <h4 className="text-sm font-black text-luminous-cyan flex items-center gap-2 uppercase tracking-widest font-display">
            <span className="size-1.5 rounded-full bg-luminous-cyan shadow-[0_0_10px_#00F5FF]"></span>
            EXECUTE
          </h4>
          <span className="text-[8px] font-black text-luminous-cyan/40 uppercase tracking-[0.2em]">
            Urgent &amp; Important
          </span>
        </div>
      </section>
      <section className="quadrant-matrix">Decidir</section>
      <section className="quadrant-matrix">Delegar</section>
      <section className="quadrant-matrix">Eliminar</section>
    </div>
  );
}
