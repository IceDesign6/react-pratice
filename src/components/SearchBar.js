import './SearchBar.css';

function SearchBar() {
  return (
    <div className="SearchBar">
      <div className="search-wrap">
        <div className="search-icon">🔍</div>
        <input className="search-input" />
        <div className="search-clear">✕</div>
      </div>
    </div>
  );
}

export default SearchBar;
