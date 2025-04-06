/*El componente app sera el principal en donde vamos a rendereizar el resto de componentes */
import './App.css';
import Hero from './Componentes/hero';
import Navbar from './Componentes/navBar';
import Productos from './Componentes/productos';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <Hero />
      <Productos />
      <Hero />

      <main className="p-8">
        <h1 className="text-3xl font-bold">Bienvenido a PlussFit</h1>
      </main>
    </div>
  );
}

export default App;