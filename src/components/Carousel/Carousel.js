import React from 'react'
import './Carousel.css'

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselData: [ // 輪播資料
        { label: 'Kobe Bryant', bg: 'floralwhite' },
        { label: 'Lebron James', bg: 'snow' },
        { label: 'Kevin Durant', bg: 'tan' },
        { label: 'James Harden', bg: 'dardgray' },
        { label: 'Anthony David', bg: 'thistle' },
        { label: 'Devin Booker', bg: 'lightsteelblue' },
        { label: 'Chris Paul', bg: 'darkkhaki' },
        { label: 'LaMelo Ball', bg: 'seashell' },
        { label: 'Stephen Curry', bg: 'rosybrown' },
        { label: 'Klay Thompson', bg: 'gainsboro' },
      ],
      nowCarousel: 0, // 目前輪播索引
      perItemWidth: 0, // 每則輪播寬度
    };
  }

  componentDidMount() {
    this.setState({
      perItemWidth: document.querySelector('.Carousel').clientWidth,
    })
  }

  // 設定索引，並滑到此則輪播 (參數存放在 element -> data-set -> page)
  changePage = ($event) => {
    const targetPage = Number($event.target.dataset.page)

    // 索引值不能比0小、不能大於輪播個數
    if (targetPage < 0 || targetPage > this.state.carouselData.length - 1) return

    // 將索引值存到 state
    this.setState({
      nowCarousel: targetPage,
    })

    // 滑動到索引對應到的輪播
    document.querySelector('.carousel-area').scrollTo({
      left: targetPage * this.state.perItemWidth,
      behavior: "smooth",
    })
  }

  render() {
    return (
      <div className="Carousel">
        <div className='carousel-area'>
          {
            this.state.carouselData.map((item, index) => {
              return <div
                className='carousel-item'
                key={ index }
                style={ { background: item.bg, width: this.state.perItemWidth } }
              >{ item.label }</div>
            })
          }
        </div>
        <div className='pre-page page-btn' data-page={ this.state.nowCarousel - 1 } onClick={ this.changePage }>⇦</div>
        <div className='next-page page-btn' data-page={ this.state.nowCarousel + 1 } onClick={ this.changePage }>⇨</div>
        <div className='pagination-wrap'>
          {
            this.state.carouselData.map((item, index) => {
              return <div className={ `page-dot ${ index === this.state.nowCarousel && 'active' }` } data-page={ index } key={ index } onClick={ this.changePage }/>
            })
          }
        </div>
      </div>
    );
  }
}

export default Carousel;
