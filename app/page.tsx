"use client";
import { useState } from "react";
import EisenhowerMatrix from "./components/EisenhowerMatrix";
export default function Home() {
  const [OpenJobList, setOpenJobList] = useState(false);
  const temp = {};
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
    <main className="grow">
      {OpenJobList ? (
        <div
          onClick={handleCloseJobList}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center size-64 bg-gray-700"
        >
          Joblist
          <div className="border-2 border-blue-400">Task 1</div>
          <div className="border-2 border-blue-400">Task 2</div>
          <div className="border-2 border-blue-400">Task 3</div>
          <div className="border-2 border-blue-400">Task 4</div>
        </div>
      ) : null}
      <EisenhowerMatrix />
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
