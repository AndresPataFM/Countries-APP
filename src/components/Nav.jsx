import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import image from '../panda.png'
import { Link } from 'react-router-dom';

export default function Nav({onSearch}){
    return(
       <nav id='cnt'>
        <div>
            <span id="conociendo">Exploring</span><span id="asia">Asia</span>
           <Link to={"/"}><img src={image} width="95" /></Link>
        </div>
        <SearchBar
            onSearch={onSearch}
        />
       </nav>
    );
   
};
