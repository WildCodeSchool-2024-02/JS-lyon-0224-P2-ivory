import "./searchbar-style.module.css";

function SearchBar () {
  return (
    <form>
      <input type="text" placeholder="Recherche..."/>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;