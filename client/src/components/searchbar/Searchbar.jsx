import styles from "./searchbar-style-module.css";

export default function SearchBar() {
  return (
    <form className={styles.SearchBox}>
      <input type="text" placeholder="Recherche..." />
      <button type="submit">Search</button>
    </form>
  );
}
