import React, {useState} from 'react';
import Card from './Card.jsx';
//Al importar Card se importa a la vez link?
import styles from './HorizontalBar.module.css';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { Link } from 'react-router-dom';

export default function Cards({countries}){
    return (
        <div className={styles.container}>
            <h2>Countries</h2>
            <div className={styles.bar}>
                <ScrollMenu
                    wheel= {false}
                    scrollBy={3}
                    arrowLeft={<div className={styles.arrow}>{"🡠"}</div>}
                    arrowRight={<div className={styles.arrow}>{"🡢"}</div>}
                    data={countries.map((countries, index) => (
                            <Link className={styles.clase2} to={`/home/${countries.name}`}>
                            <Card 
                                name={countries.name}
                                flag={countries.flag}
                                subregion={countries.subregion}
                                key={index}
                            />
                            </Link>
                    ))}
                />
            </div>
            
        </div>
        
    );
};
// tengo q hacer "npm install --save react-horizontal-scrolling-menu "
