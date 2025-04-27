import React from "react";

const Hero = () => {
  return (
    <section  className="relative bg-contain bg-center bg-no-repeat h-[400px] flex flex-col items-center justify-center text-white px-6"
      style={{ backgroundImage: "url('/images/sentado hombre.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
     
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

   
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Transforma tu Cuerpo con PlussFit</h1>
        <p className="text-lg md:text-xl mb-6">Únete a nuestra comunidad y lleva tu entrenamiento al siguiente nivel.</p>
        <a href="#products">
        <button className=" bg-green-500 text-black font-semibold px-8 py-3 rounded-lg text-lg hover:bg-green-600 transition">
          Prueba nuestros productos
        </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
