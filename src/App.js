import './App.css';
import SearchBar from './components/SearchBar';
import Carousel from './components/Carousel';
import Collapse from './components/Collapse';

function App() {
  return (
    <div className="App">
      <div className="search-box">
        <SearchBar />
      </div>
      <div className="carousel-box">
        <Carousel />
      </div>
      <div className="timer-box">
        倒數 
      </div>
      <div className="item-box">
        <div className='collapse-box'>
          <Collapse />
        </div>
        <div className='item-list-box'>1</div>
      </div>
    </div>
  );
}

export default App;
