// este componente nos muestra la disponibilidad de los productos que estan en stock
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const productos = [
  {
    id: 1,
    nombre: "Proteína Bipro",
    imagen: "/images/biproclassic.png",
    sabor: "Vainilla, chocolate o fresa",
    precio: "$150.000 COP",
    descripcion: "Proteína de alta calidad para mejorar tu rendimiento."
  },
  {
    id: 2,
    nombre: "Crea Stack",
    imagen: "/images/creastack.png",
    sabor: "Frutas rojas",
    precio: "$150.000 COP",
    descripcion: "Creatina para mejorar tu fuerza y resistencia."
  },
  {
    id: 3,
    nombre: "Protein panckakes",
    imagen: "/images/bigger.png",
    sabor: "Vainilla",
    precio: "$50.000 COP",
    descripcion: "Protein Pancake Tradicional, es una mezcla para preparar deliciosos pancakes y waffles con alto aporte de proteínas, para personas que desean tener una buena nutrición basada en un consumo apropiado de nutrientes, todo gracias a su avanzada y deliciosa formula. Protein Pancake aporta 22 g de proteína por servicio."
  },
  {
    id: 4,
    nombre: "Colagen Stack",
    imagen: "/images/colageno.png",
    sabor: "Frutas rojas",
    precio: "$100.000 COP",
    descripcion: "El colágeno es una proteína que se encuentra en el organismo humano y es la más abundante de todas con casi un tercio del total proteico del cuerpo. Se encuentra en las estructuras de los músculos, tendones, articulaciones, piel, cabello y uñas. Con el tiempo ocurre una disminución de la producción de colágeno en el cuerpo. El colágeno hidrolizado posee una mejor absorción que el colágeno tradicional."
  },
  {
    id: 5,
    nombre: "Nutra Vegan",
    imagen: "/images/nutravegan.png",
    sabor: "Frutas rojas",
    precio: "$150.000 COP",
    descripcion: "Creatina para mejorar tu fuerza y resistencia."
  },
  {
    id: 6,
    nombre: "Bi pro lite",
    imagen: "/images/biprolite.png",
    sabor: "Frutas rojas",
    precio: "$150.000 COP",
    descripcion: "Creatina para mejorar tu fuerza y resistencia."
  },
  {
    id: 6,
    nombre: "Megaplex creatine",
    imagen: "/images/megaplex.png",
    sabor: "cookies",
    precio: "$90.000 COP",
    descripcion: "Creatina para mejorar tu fuerza y resistencia."
  },
  {
    id: 7,
    nombre: "Burner stack",
    imagen: "/images/burner.png",
    sabor: "Frutas rojas",
    precio: "$150.000 COP",
    descripcion: "Creatina para mejorar tu fuerza y resistencia."
  },
];

const Productos = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  return (
    <><section id="products" className="p-8 bg-gray-100"></section><div className="py-12 bg-white">
      <h2 className="text-center text-2xl font-bold text-green-700 mb-8">
        NUESTROS PRODUCTOS
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-12">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="border rounded-lg p-4 shadow cursor-pointer hover:shadow-lg"
            onClick={() => setProductoSeleccionado(producto)}
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="text-lg font-semibold">{producto.nombre}</h3>
            <p className="text-sm text-gray-500">Sabor: {producto.sabor}</p>
            <p className="text-green-600 font-bold mt-2">{producto.precio}</p>
          </div>
        ))}
      </div>

      {/* este Modal abre la descripcion de cada producto con su respectivo precio */}
      {productoSeleccionado && (
        <Dialog open={true} onClose={() => setProductoSeleccionado(null)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full shadow-lg">
            <button
              onClick={() => setProductoSeleccionado(null)}
              className="absolute top-2 right-2 text-gray-600"
            >
              ✕
            </button>
            <img
              src={productoSeleccionado.imagen}
              alt={productoSeleccionado.nombre}
              className="w-full h-40 object-cover mb-4 rounded" />
            <h3 className="text-xl font-bold">{productoSeleccionado.nombre}</h3>
            <p className="text-gray-600 mt-2">{productoSeleccionado.descripcion}</p>
            <p className="text-green-600 font-bold mt-4">{productoSeleccionado.precio}</p>
          </div>
        </Dialog>
      )}
    </div></>
  );
};

export default Productos;
