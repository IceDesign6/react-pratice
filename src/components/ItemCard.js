import React from 'react'
import styled from 'styled-components'

const Element = (props) => {
  const handleClick = e => {
    e.stopPropagation();
    if (!props.onClick) return
    props.onClick(props.data)
  }

  return (
    <div className={ `item-card ${props.className}` } onClick={ handleClick }>
      <div className='product-img'>
        <img src={ props.data.IMG } alt={ props.data.Name } />
      </div>
      <div className='product-name'>{ props.data.Name }</div>
    </div>
  )
}

const ItemCard = styled(Element)`
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #F6F6F6;
  width: 100%;
  height: 200px;
  cursor: pointer;

  .product-img {
    width: 50%;
    height: 50%;
    transition: all .2s linear;
  }

  .product-img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  :hover .product-img {
    width: 80%;
    height: 80%;
  }
`

export default ItemCard