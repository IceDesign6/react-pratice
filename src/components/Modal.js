import React from 'react'
import styled from 'styled-components'

import ItemCard from './ItemCard'

const Element = (props) => {
  const handleClick = e => {
    e.stopPropagation();
    props.onClick(null)
  }

  return (
    <div className={ props.className } onClick={ handleClick }>
      <div className='modal-content'>
        <ItemCard data={ props.modalData } />
        <div className='modal-close' onClick={ handleClick }>✕</div>
      </div>
    </div>
  )
}

const Modal = styled(Element)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .8);

  .modal-content {
    padding: 20px;
    background: #F6F6F6;
    position: fixed;
    top: 20%;
    left: 20%;
    right: 20%;
    bottom: 20%;
    border-radius: 16px;
  }

  .modal-close {
    position: fixed;
    top: calc(20% + 20px);
    right: calc(20% + 20px);
    border-radius: 50%;
    background: gray;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: white;
    cursor: pointer;
    opacity: .5;
    transition: all .2s linear;
  }

  .modal-close:hover {
    opacity: 1;
  }
`

export default Modal