"use client";
import { useContext, useState } from "react";
import EisenhowerMatrix from "./components/EisenhowerMatrix";

import AllTaskListCard from "./components/AllTaskListCard";
import matrixApi from "./utilities/matrix.json";

export default function Home() {
  const [OpenJobList, setOpenJobList] = useState(false);

  function handleOpenJobList() {
    setOpenJobList(!OpenJobList); // Simplified toggle
  }

  return (
    <main className="flex-1 relative overflow-hidden">
      {OpenJobList && <AllTaskListCard />}
      <EisenhowerMatrix response={matrixApi.data} />
      <button
        type="button"
        onClick={handleOpenJobList}
        className="absolute right-8 bottom-8 size-32 text-black bg-emerald-900 hover:bg-emerald-400 z-40"
      >
        Tareas
      </button>
    </main>
  );
}
