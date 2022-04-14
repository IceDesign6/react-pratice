import React from 'react'
import styled from 'styled-components'

const Element = ({ red, className }) => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <div className={ className } onClick={ goToTop }>
      ⇑
    </div>
  )
}

const GoTop = styled(Element)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  background: gray;
  width: 100%;
  height: 100%;
  font-size: 30px;
  color: white;
  opacity: .5;
  cursor: pointer;
  transition: all .2s linear;

  :hover {
    opacity: 1;
  }
`

export default GoTop