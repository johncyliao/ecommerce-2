import React, {useContext} from 'react'
import { Context } from "../Context";
import {Link} from "react-router-dom"
import { BsCartDash } from 'react-icons/bs';
import { BsFillCartFill } from 'react-icons/bs';
import headerImage from '../images/carwash-icon.png';
import {MdLocalCarWash} from 'react-icons/md'

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
        <Link to="/" className='header-left'>
          <MdLocalCarWash style={{"fontSize": "30px"}} />
          <h2>John's Autolavado</h2>
        </Link>
        <div className="header-right">
          <Link to="/" className='header-right-link'>Home</Link>
          <Link to="/products" className='header-right-link'>Products</Link>
          <Link to="/cart" className='header-right-link'>Cart</Link>
          <Link to="/contact" className='header-right-link'>Contact</Link>
          <Link to="/about" className='header-right-link'>About</Link>
          
        </div>
    </header>
  )
}

export default Header