import React from "react";
import styles from './Country.module.css';

export default function Country({country}){
    return(
        <div className={styles.cnt}>
            <div className={styles.container}>
                <h2 className={styles.name}>{country.name}</h2>
                <div className={styles.data}>
                    <div className={styles.flagcontainer}>
                        <img src= {country.flag} className={styles.flag}/>
                    </div>
                    <div className={styles.alldata}>
                        <div className={styles.appdata}>
                            <div className={styles.minidata}>
                                <p className={styles.title}>Capital</p>
                                <p>{country.capital}</p>
                            </div>
                            <div className={styles.minidata}>
                                <p className={styles.title}>Region</p>
                                <p>{country.subregion}</p>
                            </div>
                            <div className={styles.minidata}>
                                <p className={styles.title}>Population</p>
                                <p>{country.population}</p>
                            </div>
                        </div>
                        <div className={styles.appdata}>
                            <div className={styles.minidata}>
                                <p className={styles.title}>Latitude</p>
                                <p>{country.latlng[0]}
                                
                                </p>
                            </div>
                            <div className={styles.minidata}>
                                <p className={styles.title}>Longitude</p>
                                <p>{country.latlng[1]}</p>
                            </div>
                            <div className={styles.minidata}>
                                <p className={styles.title}>Area(km²)</p>
                                <p>{country.area}</p>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    );
};
