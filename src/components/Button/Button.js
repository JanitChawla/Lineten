import React from 'react'
import './Button.css'

const Button = ({props, handleClick, condition}) => {
  return (
    <button onClick={handleClick} className={`btn ${condition}`}>{props}</button>
  )
}

export default Button