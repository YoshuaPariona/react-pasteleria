export const HomePage = () => {
  return (
    <>
      <div className="relative w-full h-[calc(100vh-100px)] ">
        <img
          src="src/assets/fondo.webp"
          alt="Fondo"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="absolute h-full left-16 z-10 text-white flex flex-col justify-center items-center">
          <h2 className="text-8xl mb-4">Sweet Treats, Perfect Eats</h2>
          <p className="text-4xl">Delicias horneadas con amor cada día</p>
        </div>
      </div>

    </>
    
  );
};