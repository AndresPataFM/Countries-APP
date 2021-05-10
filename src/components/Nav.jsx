import React from 'react';
import './Nav.css';
import image from '../panda.png'

export default function Nav(){
    return(
       <nav><span id="conociendo">conociendo</span> <span id="asia">Asia</span>
        <img src={image} width="95" />
        
       </nav>
    );
   
};