export default function EisenhowerMatrix() {
  return (
    <div className="grid grid-cols-2 min-h-full relative">
      <div className="matrix-v-line"></div>
      <div className="matrix-h-line"></div>
      <section className=" text-black flex justify-center items-center">
        Hacer
      </section>
      <section className=" text-black flex justify-center items-center">
        Decidir
      </section>
      <section className=" text-black flex justify-center items-center">
        Delegar
      </section>
      <section className=" text-black flex justify-center items-center">
        Eliminar
      </section>
    </div>
  );
}
