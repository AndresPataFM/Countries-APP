import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card(country){
    return (
        <div className={styles.card}>
            <img src={country.flag} className={styles.flag}/>
            <div className={styles.cardText}>
                <p className={styles.cardName}>{country.name}</p>
                <p className={styles.cardSubregion}>{country.subregion}</p>
            </div>
        </div>
    );
};