//Estado y React
import React, { useState } from 'react';
//Componentes
import Nav from '../components/Nav.jsx';  //Tiene a SearchBar
import HorizontalBar from '../components/HorizontalBar.jsx'; //Tiene a Card
import Descripcion from '../components/Descripcion.jsx';
import Country from '../components/Country.jsx';
import Landing from '../components/Landing.jsx';
//imports de componentes que luego se borran
import TestCountry from '../components/TestCountry'; //Data sacada del API para testear
import Card from '../components/Card.jsx';
import SearchBar from '../components/SearchBar.jsx';
//Ruta
import { Route } from 'react-router-dom';
//Estilo
import './App.css'


// Primer funcion solo para testear los componentes, sabemos que aparece en el div root
export default function App(){
  //aca iria la constante de estado

  //aca va el llamado a la api

  //aca retorna los componentes
  //solo puede retornar 1 componente pero este puede tener muchos hijos
  return (
    <div className="App">
      <div>
        <Nav/>
      </div>
      <div>
        <SearchBar/>
      </div>
      <div>
        <Card/>
      </div>
      <div>
        <HorizontalBar/>
      </div>
      <div>
        <Country/>
      </div>
      <div>
        <Landing/>
      </div>
      <div>
        <Descripcion/>
      </div>
    </div>
  );
};

// Función funcional
// export default function App(){
//   return (
//     <div>
//       codigo
//     </div>
//   );
// };


// Esto venia por default
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
