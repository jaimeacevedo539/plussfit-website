//este componente nos muestra ciertas opiniones de clientes que ya probaron la pagina y los productos
import React from "react";

const Testimonios = () => {
  const testimonios = [
    {
      id: 1,
      nombre: "Juan Pérez",
      imagen: "https://randomuser.me/api/portraits/men/1.jpg",
      texto: "Este es un servicio excelente. ¡Me encanta cómo me ayuda a mantenerme en forma y saludable!",
    },
    {
      id: 2,
      nombre: "Ana Gómez",
      imagen: "https://randomuser.me/api/portraits/women/2.jpg",
      texto: "Nunca pensé que un plan de entrenamiento personalizado sería tan efectivo. ¡Recomiendo totalmente PlussFit!",
    },
    {
      id: 3,
      nombre: "Carlos Fernández",
      imagen: "https://randomuser.me/api/portraits/men/3.jpg",
      texto: "Los entrenamientos son desafiantes y la comunidad es muy motivadora. ¡Aquí es donde quiero estar!",
    },
  ];

  return (
    
    <section id="testimonials" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Testimonios
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonios.map((testimonio) => (
          <div
            key={testimonio.id}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <img
              src={testimonio.imagen}
              alt={testimonio.nombre}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-600 mb-4">{testimonio.texto}</p>
            <h3 className="text-xl font-semibold text-gray-800">{testimonio.nombre}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonios;
