import React from 'react';
import './Landing.css';
import image1 from "../gate.png"
import image2 from "../montanas.png"
import image3 from "../teamwork.png"
import image4 from "../asian.png"
import { Link } from 'react-router-dom';
import Form from './Form.jsx'

export default function Landing(){
    return(
        
        <div id="landing">
            <div id="container">
                <div id="info">
                    <p>Exploring Asia will let you learn important 
                         information about the countries that make 
                         up this continent. Enter now and learn more 
                         about one of the oldest amalgamation of culture
                         of the human history.</p>
                         <Link to={`/home`}>
                         <button>Enter Now</button>
                         </Link>
                </div>
                <div id="datos">
                
                <img src={image4}/>
                <h1>Data of interest</h1>
                <p> A continen with so much history only has good things to tell</p>
                </div>
                <Form/>
               
            </div>
            <div class= "cont" id="cont">
            <div id="poblacion">
                <img src={image3}/>
                <h4>Cuanta gente!</h4>
                <p>Asia is the continent with the most 
                <b>population density</b> of the entire 
                planet, 4.46 millions of people live in
                44.5 million square kilometers.
                </p>
                </div>
            <div id="everest">
                <img src={image2}/>
                <h4>Height</h4>
                <p>Mount <b>Everest</b> is the highest mountain in the world
                with an altitude of 8.848 meters, equivalent to 80 futbol satiums.
                </p>
            </div>
            <div id="ciudad">
                <img src={image1}/>
                <h4>Cities</h4>
                <p>With over 13 million habitants <b>Tokio</b> takes the prize
                for the most populated city in all of Asia.</p>
            </div>
            </div>

        </div>
    )
}