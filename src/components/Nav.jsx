import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import image from '../panda.png'

export default function Nav({onSearch}){
    return(
       <nav id='cnt'>
        <div>
            <span id="conociendo">Exploring</span> <span id="asia">Asia</span>
            <img src={image} width="95" />
        </div>
        <SearchBar
            onSearch={onSearch}
        />
       </nav>
    );
   
};