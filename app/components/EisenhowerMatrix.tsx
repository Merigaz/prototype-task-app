export default function EisenhowerMatrix() {
  return (
    <div className="grid grid-cols-2 min-h-full">
      <div className="matrix-v-line"></div>
      <div className="matrix-h-line"></div>
      <div className=" text-black flex justify-center items-center">Hacer</div>
      <div className="0 text-black flex justify-center items-center">
        Decidir
      </div>
      <div className=" text-black flex justify-center items-center">
        Delegar
      </div>
      <div className=" text-black flex justify-center items-center">
        Eliminar
      </div>
    </div>
  );
}
