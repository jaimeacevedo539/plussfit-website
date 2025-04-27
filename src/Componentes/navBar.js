
import React, { useState } from "react";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="bg-black text-white p-4 flex justify-between items-center shadow-lg">
       
        <h1 className="text-2xl font-bold tracking-wide">PlussFit</h1>

        
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <a href="#products" className="hover:text-gray-400 transition">Productos</a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-gray-400 transition">Testimonios</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400 transition">Contacto</a>
          </li>
        </ul>
        
       
       {/*boton de acceder en donde al darle click nos abre el modal para esctribir los datos de acceso*/}
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-500 px-6 py-2 rounded-lg text-black font-semibold hover:bg-green-600 transition"
        >
          Accede
        </button>
      </nav>

      {/* este es el modal que se abre y nos permite introducir credenciales de acceso*/ }
      
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-50 items-center text-black">
          <div className="bg-white p-8 rounded-lg shadow-lg w-80 text-black">
            <h2 className="text-2xl mb-4 font-bold text-center text-black">Iniciar sesión</h2>
            
            <input
              type="text"
              placeholder="Usuario"
              className="w-full p-2 mb-4 border rounded"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full p-2 mb-4 border rounded"
            />
            <div className="flex justify-between">
              <button
                className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600"
              >
                Entrar
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;


