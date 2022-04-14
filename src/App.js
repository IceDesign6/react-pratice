import React from 'react';

import axios from './plugins/axios'

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Carousel from './components/Carousel/Carousel';
import Collapse from './components/Collapse/Collapse';
import GoTop from './components/GoTop';
import ItemCard from './components/ItemCard';
import Modal from './components/Modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null, // 計時器
      ms: 60 * 60 * 3 * 1000, // 倒數總毫秒
      hr: 0, // 顯示倒數(小時
      min: 0, // 顯示倒數(分鐘
      sec: 0, // 顯示倒數(秒

      loading: false,

      searchTimer: null, // 搜尋文字倒數器
      searchText: '', // 搜尋文字

      categoryMenu: [ // 分類清單列表
        { label: '球星系列', id: 1 },
        { label: 'Nike系列', id: 2 },
      ],
      nowCategory: 1, // 目前分類

      productData: [], // 商品列表

      showProduct: null,
    };
  }

  componentDidMount() {
    this.getProductData()
    this.timer = setInterval(() => {
      this.timerCoune()
    }, 1000)
  }

  componentWillUnmount() {
    this.killTimer()
  }

  // 清除計時器
  killTimer = () => {
    clearInterval(this.timer)
    this.timer = null
  }

  // 格式化數字，單碼則補零
  formatNumber = (val) => {
    return val < 10 ? `0${val}` : val
  }

  // 倒數計時
  timerCoune = () => {
    if (this.state.ms <= 0) return this.killTimer()
    const nowMs = this.state.ms - 1000
    const nowHr = Math.floor(nowMs / (60 * 60 * 1000))
    const nowMin = Math.floor(nowMs % (60 * 60 * 1000) / (1000 * 60))
    const nowSec = Math.floor(nowMs % (60 * 1000) / (1000))
    this.setState({
      ms: nowMs,
      hr: this.formatNumber(nowHr),
      min: this.formatNumber(nowMin),
      sec: this.formatNumber(nowSec),
    })
  }

  // API GET, 取得商品列表
  getProductData = async () => {
    try {
      const productData = await axios.get("/front/item/list", {
        params: {
          Page: 1,
          Count: 30,
          CategoryID: this.state.nowCategory,
          Name: this.state.searchText,
        }
      })
      this.setState({
        productData: productData.data.Result.List
      })
    } catch (err) {
      console.error(err)
    }
  }

  // 更改搜尋匡內容
  changeSearchInput = async ($event) => {
    clearTimeout(this.searchTimer)
    this.searchTimer = null
    const val = $event.target.value
    await this.setState({
      searchText: val,
      loading: true,
    })
    this.searchTimer = setTimeout(async () => {
      await this.getProductData()
      this.setState({
        loading: false,
      })
    }, 1000)
  }

  clearSearchInput = async () => {
    await this.setState({
      searchText: "",
      loading: true,
    })
    await this.getProductData()
    this.setState({
      loading: false,
    })
  }

  // 切換類別
  changeCategory = async (val) => {
    await this.setState({
      nowCategory: val,
    })
    this.getProductData()
  }

  // 選擇商品
  chooseProduct = async (item) => {
    await this.setState({
      showProduct: item,
    })
  }

  render() {
    let productTempalte;
    if (this.state.productData.length) {
      productTempalte = this.state.productData.map(item => {
        return <ItemCard key={ item.ID } data={ item } onClick={ this.chooseProduct } />
      })
    } else {
      productTempalte = <div>No Data.</div>
    }

    return (
      <div className='App'>
        <div className='search-box'>
          <SearchBar inputText={ this.state.searchText } changeSearchInput={ this.changeSearchInput } clearSearchInput={ this.clearSearchInput } />
        </div>
        <div className='carousel-box'>
          <Carousel />
        </div>
        <div className='timer-box'>
          倒數 <div className='timer-countdown'>{ this.state.hr } : { this.state.min } : { this.state.sec }</div>
        </div>
        <div className='item-box'>
          <div className='collapse-box'>
            <Collapse menu={ this.state.categoryMenu } nowCategory={ this.state.nowCategory } changeCategory={ this.changeCategory } />
          </div>
          <div className={ `item-list-box ${ this.state.loading && 'loading' }` }>
            { productTempalte }
          </div>
        </div>
        <div className='gotop-box'>
          <GoTop />
        </div>
        {
          this.state.showProduct ? <Modal modalData={ this.state.showProduct } onClick={ this.chooseProduct }/> : ''
        }
      </div>
    );
  }
}

export default App;