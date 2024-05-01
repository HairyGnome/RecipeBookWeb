import styles from "./Searchbar.module.css";
import {useState} from "react";

function Searchbar({onSearchTermSubmit}) {

    const [searchTerm, setSearchTerm] = useState('');

    function onTermSubmit(event) {
        event.preventDefault();
        onSearchTermSubmit(searchTerm);
    }

    return (
        <div className={styles['searchbar-div']}>
            <form onSubmit={onTermSubmit}>
                <input type="text" className={styles['searchbar']} placeholder="Search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </form>
        </div>
    )
}

export default Searchbar;