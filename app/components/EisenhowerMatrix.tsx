"use client";
import Quadrant from "./Quadrant";
export default function EisenhowerMatrix(response: any) {
  const data = response.response;

  return data.map((matrixdata: any) => (
    <div className="grid grid-cols-2 min-h-full relative" key={matrixdata.id}>
      <h1 className="text-cool-white absolute w-full text-center font-display size-24 tracking-widest">
        {matrixdata.title}
      </h1>
      {console.log(matrixdata.quadrants)}
      <div className="matrix-v-line"></div>
      <div className="matrix-h-line"></div>
      <div className="intersection-glow"></div>
      {matrixdata.quadrants.map((quadrants: any) => (
        <Quadrant data={quadrants} key={quadrants.id} />
      ))}
    </div>
  ));
}
