import React, {useState} from 'react';
import Card from './Card.jsx';
//Al importar Card se importa a la vez link?
import styles from './HorizontalBar.module.css';
import ScrollMenu from 'react-horizontal-scrolling-menu';

export default function Cards({countries}){
    
    return (
        <div className={styles.container}>
            <h2>Countries</h2>
            <div className={styles.bar}>
                <ScrollMenu
                    wheel= {false}
                    scrollBy={1}
                    arrowLeft={<div className={styles.arrow}>{" < "}</div>}
                    arrowRight={<div className={styles.arrow}>{" > "}</div>}
                    data={countries.map((changeCountry, countries, index) => (
                            <div>
                            <Card
                                name={countries.name}
                                flag={countries.flag}
                                subregion={countries.subregion}
                                key={index}
                            />
                            <button onClick={changeCountry(countries)}>Description</button>
                            </div>
                    ))}
                />
            </div>
            
        </div>
        
    );
};
// tengo q hacer "npm install --save react-horizontal-scrolling-menu "