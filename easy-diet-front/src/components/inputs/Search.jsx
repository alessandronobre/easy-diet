import { useState } from "react";
import styles from '/src/components/inputs/Search.module.css';

export default function Search({ onSearch }) {

    const [query, setQuery] = useState("");

    const handleInputChange = (e) => {
      setQuery(e.target.value);
      if (onSearch) {
        onSearch(e.target.value);
      }
    };

    return (
        <>
            <input class="search" className={styles.search}
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Digite para pesquisar..." />
        </>
    );
}