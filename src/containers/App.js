//Estado y React
import React, { useState, useEffect } from 'react';
// //Instalar axios con 'npm install axios'
// import axios from 'axios';
//Componentes
import Nav from '../components/Nav.jsx';  //Tiene a SearchBar
import HorizontalBar from '../components/HorizontalBar.jsx'; //Tiene a Card
import Descripcion from '../components/Descripcion.jsx';
import Country from '../components/Country.jsx';
import Landing from '../components/Landing.jsx';
//imports de componentes que luego se borran
import TestCountry, { Afghanistan } from '../components/TestCountry'; //Data sacada del API para testear
import SearchBar from '../components/SearchBar.jsx';
//Ruta
import { Route } from 'react-router-dom';
//Estilo
import './App.css'


// Primer funcion solo para testear los componentes, sabemos que aparece en el div root
export default function App(){
  //aca iria la constante de estado
  const [mainCountry, setMainCountry] = useState(Afghanistan)
  const [countriesData, setCountriesData] = useState(TestCountry);

  //aca va el llamado a la api
  const apiCountries = 'https://restcountries.eu/rest/v2/region/asia';

  //fetch de TODA la data
  //fetch sincrónico
  useEffect(() => {
    fetch(apiCountries)
    .then(res => res.json())
    .then(json => {
      var data = json
      console.log(data)
      setCountriesData(data)
      setMainCountry(data[2])}) 
  }, []) 
  function changeCountry(country){
    setMainCountry(country)
  }
  
  // con el [] solo hace el llamado una vez, si esta afuera llama siempre
 
  //fetch asincrónico
  // useEffect(() => {
  //   const getCountriesData = async (apiCountries)=>{
  //     let res = await fetch(apiCountries),
  //     json = await res.json();
  //     console.log(json)
  //     setCountriesData(json);
  //     setMainCountry(countriesData[0])
  //   }
  // }, [])
  
  //Fetch de click

  //aca retorna los componentes
  //solo puede retornar 1 componente pero este puede tener muchos hijos
  return (
    <div className="App">
        <Route
          exact path= '/'
          component={Landing}
        />
        <Route
          path= '/home'
          render={()=><Country
            country={mainCountry}
            />}
        />
        <Route
          path= '/home'
          render={()=><HorizontalBar
            countries={countriesData}
            changeCountry={changeCountry}
          />}
        />
        
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

// return (
//   <div className="App">
//       <Nav/>
//       <SearchBar/>
//       <Country
//           country={mainCountry}
//       />
      // <HorizontalBar
      //   countries={countriesData}
      // />
//       <Landing/>
//       <Descripcion/>
//   </div>
// );