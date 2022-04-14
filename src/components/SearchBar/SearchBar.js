import './SearchBar.css';

function SearchBar(props) {
  return (
    <div className="SearchBar">
      <div className="search-wrap">
        <div className="search-icon">🔍</div>
        <input className="search-input" value={ props.inputText } onChange={ props.changeSearchInput } />
        <div className="search-clear" onClick={ props.clearSearchInput }>✕</div>
      </div>
    </div>
  );
}

export default SearchBar;
