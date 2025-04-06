import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide">PlussFit</h1>

      {/* Menú */}
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

      {/* Botón Acceder */}
      <button className="bg-green-500 px-6 py-2 rounded-lg text-black font-semibold hover:bg-green-600 transition">
        Accede
      </button>
    </nav>
  );
};

export default Navbar;

