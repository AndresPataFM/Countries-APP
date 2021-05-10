import React, { useState } from "react";
// lo necesita porque usamos el state para hacer la busqueda
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
    const [country, setCountry] = useState("");
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        onSearch(country);
      }}className={StyleSheet.searchBar}>
        <input
          type="text"
          placeholder="Country..."
          value={country}
          onChange={e => setCountry(e.target.value)}
          className={styles.searchInput}/>
        <input type="submit" value="Search" className={styles.searchBtn}/>
      </form>
    );
  }