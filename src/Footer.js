import React from 'react'

const Footer = (props) => {
    const year = new Date();
  return (
    <footer>
        Copyright &copy; {year.getFullYear()}
        <h2 style={{textAlign:"center"}}>{props.lenght} list {props.lenght>1?"items":"item"}</h2>
    </footer>

  )
}

export default Footer