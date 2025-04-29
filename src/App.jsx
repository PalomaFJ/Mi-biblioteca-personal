import { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import BookList from './components/BookList';

function App() {
  const [libros, setLibros] = useState([
    { id: 1, titulo: 'Cuentos, rimas y leyendas', autor: 'Gustavo Adolfo Bécquer', leido: true },
    { id: 2, titulo: 'Coñodramas', autor: 'Moderna de Pueblo', leido: true },
    { id: 3, titulo: 'La sociedad contra el Estado', autor: 'Pierre Clastres', leido: true },
    { id: 4, titulo: 'Rebelión en la granja', autor: 'George Orwell', leido: true },
    { id: 5, titulo: 'El feminismo es para todo el mundo', autor: 'bell hooks', leido: true },
    { id: 6, titulo: 'Todas deberíamos ser feministas', autor: 'Chimamanda Ngozi Adichie', leido: false },
    { id: 7, titulo: 'Crónicas de una muerte anunciada', autor: 'Gabriel García Márquez', leido: true },
    { id: 8, titulo: 'La conquista del pan', autor: 'Piotr Kropotkin', leido: true },
    { id: 9, titulo: 'El segundo sexo', autor: 'Simone de Beauvoir', leido: true },
    { id: 10, titulo: 'Tu argumentario feminista en datos', autor: 'Julia Salander', leido: true },
    { id: 11, titulo: 'El contrato amoroso', autor: 'Coral Herrera', leido: true },
    { id: 12, titulo: 'Dios y el Estado', autor: 'Mijaíl Bakunin', leido: true },
    { id: 13, titulo: 'Calibán y la bruja', autor: 'Silvia Federici', leido: true },
    { id: 14, titulo: '1984', autor: 'George Orwell', leido: true },
    { id: 15, titulo: 'La sombra del viento', autor: 'Carlos Ruiz Zafón', leido: true },
    { id: 16, titulo: 'Soldados de Salamina', autor: 'Javier Cercas', leido: true },
    { id: 17, titulo: 'La revolución por el tejado', autor: 'Lucio Urtubia', leido: true },
    { id: 18, titulo: 'Se tiene que morir mucha gente', autor: 'Victoria Martín', leido: true },
    { id: 19, titulo: 'Un mundo feliz', autor: 'Aldous Huxley', leido: true },
    { id: 20, titulo: 'La mística de la feminidad', autor: 'Betty Friedan', leido: true },
    { id: 21, titulo: 'La moral anarquista', autor: 'Piotr Kropotkin', leido: false },
    { id: 22, titulo: 'Teoría King Kong', autor: 'Virginie Despentes', leido: true },
    { id: 23, titulo: 'Muerte de un anarquista en las escalinatas del palacio', autor: 'Jorge Segovia', leido: true },
    { id: 24, titulo: 'La metamorfosis', autor: 'Franz Kafka', leido: true },
    { id: 25, titulo: 'Una habitación propia', autor: 'Virginia Woolf', leido: true },
    { id: 26, titulo: 'Mujer, raza y clase', autor: 'Angela Davis', leido: true },
    { id: 27, titulo: 'La mala leche', autor: 'Henar Álvarez', leido: true },
    { id: 28, titulo: 'Ansia', autor: 'Henar Álvarez', leido: false }
  ]);
  

  const [filtro, setFiltro] = useState('');

  const librosFiltrados = libros.filter((libro) =>
    libro.titulo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header />
      <Search filtro={filtro} setFiltro={setFiltro} />
      <BookList libros={librosFiltrados} />
    </div>
  );
}

export default App;


