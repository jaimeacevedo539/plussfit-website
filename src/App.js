/*El componente app sera el principal en donde vamos a rendereizar el resto de componentes */
import './App.css';
import Contact from './Componentes/contacto';
import Hero from './Componentes/hero';
import Navbar from './Componentes/navBar';
import Productos from './Componentes/productos';
import Testimonios from './Componentes/testimonio';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <Hero />
      <Productos />
      <Hero />
      <Testimonios />
      <Contact />

      <main className="p-8">
        <h1 className="text-3xl font-bold">Bienvenido a PlussFit</h1>
      </main>
    </div>
  );
}

export default App;