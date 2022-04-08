import React, {useContext} from 'react'
import { Context } from "../Context";
import {Link} from "react-router-dom"
import { BsCartDash } from 'react-icons/bs';
import { BsFillCartFill } from 'react-icons/bs';

const Header = () => {
  const {cartItems} = useContext(Context)

  function cart() {
    if (cartItems.length > 0) {
      return <BsFillCartFill style={{"fontSize": "2.6rem"}} />
    } 
    return <BsCartDash style={{"fontSize": "2.6rem"}} />
  }

  return (
    <header>
        <Link to="/"><h2>John's Car Wash Supply</h2></Link>
        <div className="header-right">
          <Link to="/store" className='header-right-link'>Store</Link>
          <Link to="/cart" className='header-right-link'>Cart</Link>
          
        </div>
    </header>
  )
}

export default Header