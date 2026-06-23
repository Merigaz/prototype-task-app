"use client";
import { useSortable } from "@dnd-kit/react/sortable";
export default function TaskCard({ data }: any) {
  const { ref } = useSortable({
    id: data.id,
    index: data.index,
  });
  return (
    <div ref={ref}  className="text-cool-white border-[0.5px] border-cool-white rounded-2xl h-24 w-full gap-2 p-4">
      <h2 className="font-display">{data.title}</h2>
      <p className="font-sans">{data.description}</p>
    </div>
  );
}
