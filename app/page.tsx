"use client";
import { useState } from "react";
import EisenhowerMatrix from "./components/EisenhowerMatrix";
import { DragDropProvider } from "@dnd-kit/react";
import AllTaskListCard from "./components/AllTaskListCard";
import matrixApi from "./utilities/matrix.json";

export default function Home() {
  const [parent, setParent] = useState(undefined);
  const [OpenJobList, setOpenJobList] = useState(false);
  function handleOpenJobList() {
    if (OpenJobList) {
      setOpenJobList(false);
    } else {
      setOpenJobList(true);
    }
  }
  function handleCloseJobList() {
    setOpenJobList(false);
  }
  return (
    <main className="flex-1 relative overflow-hidden">
      <DragDropProvider
       
      >
        {OpenJobList ? <AllTaskListCard /> : null}
        <EisenhowerMatrix response={matrixApi.data} />
        <button
          type="button"
          onClick={handleOpenJobList}
          className="absolute right-8 bottom-8 size-32 text-black bg-emerald-900 hover:bg-emerald-400 z-40"
        >
          Tareas
        </button>
      </DragDropProvider>
    </main>
  );
}
