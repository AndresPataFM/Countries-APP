import React from 'react';
import './Landing.css';
import image1 from "../gate.png"
import image2 from "../montanas.png"
import image3 from "../teamwork.png"
import image4 from "../asian.jpg"

export default function Landing(){
    return(
        
        <div id="landing">
            <div id="container">
                <div id="info">
                    <p>Conociendo Asia te permitirá 
                        conocer información importante de los
                         países que conforman este continente.
                         Ingresa ahora y aprende un poco más sobre 
                         una de las culturas más antiguas de la historia</p>
                         <button>Ingresar Ahora</button>
                </div>
                <div id="datos">
                
                <img src={image4}/>
                <h1>Datos de interés</h1>
                <p> Un continente con tanta historia solo tiene cosas buenas que contar</p>
                </div>
               
            </div>
            <div class= "cont" id="cont">
            <div id="poblacion">
                <img src={image3}/>
                <h4>Cuanta gente!</h4>
                <p>Asia es el continente más <b>poblado</b> del 
                planeta , 4.46 millones de personas viven en 
                44.5 millones de kilómetros cuadrados.</p>
                </div>
            <div id="everest">
                <img src={image2}/>
                <h4>De altura</h4>
                <p>El monte <b>Everest</b> es la montaña más alta del mundo con una
                altitud de 8.848 metros, equivalentes a 80campos de fútbol.</p>
            </div>
            <div id="ciudad">
                <img src={image1}/>
                <h4>Ciudad</h4>
                <p>Con 13 millones de habitantes, <b>Tokio</b> se lleva el premio
                a la ciudad más poblada de toda Asia.</p>
            </div>
            </div>

        </div>
    )
}