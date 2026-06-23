import { useSortable } from "@dnd-kit/react/sortable";
import { useDroppable } from "@dnd-kit/react";

export default function Quadrant({ data, children }: any) {
  const dataquadrants = data;
  console.log(dataquadrants, "caca1");
  const { isDropTarget, ref } = useDroppable({ id: "droppable" });

  switch (dataquadrants.quadrant) {
    case 1:
      return (
        <section className="quadrant-matrix" key={dataquadrants.id}>
          <div className="flex flex-col">
            <h4 className="text-sm font-black text-luminous-cyan flex items-center gap-2 uppercase font-display">
              <span className="size-1.5 rounded-full bg-luminous-cyan shadow-[0_0_10px_#00F5FF]"></span>
              EXECUTE
            </h4>
            <span className="text-[8px] font-black text-luminous-cyan/40 uppercase tracking-[0.2em] antialiased font-display">
              Urgent &amp; Important
            </span>
          </div>
          <div ref={ref} className={isDropTarget ? "w-full h-full" : "w-full h-full z-50"}>
            {children}
          </div>
        </section>
      );
    case 2:
      return (
        <section className="quadrant-matrix" key={dataquadrants.id} ref={ref}>
          <div className="flex flex-col">
            <h4 className="text-sm font-black text-soft-teal flex items-center gap-2 uppercase tracking-widest font-display text-right">
              <span className="size-1.5 rounded-full bg-soft-teal shadow-[0_0_10px_#2DD4BF]"></span>{" "}
              STRATEGIZE
            </h4>
            <span className="text-[8px] font-black text-soft-teal/40 uppercase tracking-[0.2em] antialiased font-display">
              Future Focused
            </span>
          </div>
          {children}
        </section>
      );

    case 3:
      return (
        <section className="quadrant-matrix" key={dataquadrants.id} ref={ref}>
          <div className="flex flex-col">
            <h4 className="text-sm font-black text-luminous-violet flex items-center gap-2 uppercase tracking-widest font-display">
              <span className="size-1.5 rounded-full bg-luminous-violet shadow-[0_0_10px_#9D00FF]"></span>
              ASSIGN
            </h4>
            <span className="text-[8px] font-black text-luminous-violet/40 uppercase tracking-[0.2em] antialiased font-display">
              Delegate Action
            </span>
          </div>
          {children}
        </section>
      );
    case 4:
      return (
        <section className="quadrant-matrix" key={dataquadrants.id} ref={ref}>
          <div className="flex flex-col">
            <h4 className="text-sm font-black text-deep-magenta flex items-center gap-2 uppercase tracking-widest font-display text-right">
              <span className="size-1.5 rounded-full bg-deep-magenta shadow-[0_0_10px_#FF00FF]"></span>
              ARCHIVE
            </h4>
            <span className="text-[8px] font-black text-deep-magenta/40 uppercase tracking-[0.2em] antialiased font-display">
              Eliminate Noise
            </span>
          </div>
          {children}
        </section>
      );
  }
}
