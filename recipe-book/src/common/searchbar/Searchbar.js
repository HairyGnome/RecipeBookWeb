import styles from "./Searchbar.module.css";

function Searchbar() {
    return (
        <div className={styles['searchbar-div']}>
            <form action="/search=?">
                <input type="text" className={styles['searchbar']} placeholder="Search"/>
            </form>
        </div>
    )
}

export default Searchbar;