import React, {useState ,useContext} from "react"
import PropTypes from 'prop-types';
import { Context } from "../Context";
import { BiCommentDetail } from 'react-icons/bi'
import {Link} from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai'; //emty heart
import { AiFillHeart } from 'react-icons/ai'; //filled heart
import { BsCartPlus } from 'react-icons/bs'; //empty cart
import { BsFillCartCheckFill } from 'react-icons/bs'; //filled cart
// import useHover from "../hooks/useHover"


function Image({className, photo}) {
    const [hovered, setHovered] = useState(false)
    // const [hovered, ref] = useHover()
    const {toggleFavorite, addToCart, removeFromCart, cartItems} = useContext(Context)


    const linkToProduct = photo.name.replace(/\s/,'-');

    //conditionally showing the heart icon
    function heartIcon() {
        if (photo.isFavorite) {
            return <AiFillHeart 
                className="favorite" 
                onClick={() => toggleFavorite(photo.id)} 
            />
        } else if (hovered) {
            return <AiOutlineHeart 
                className="favorite" 
                onClick={() => toggleFavorite(photo.id)} 
            />
        }
    }

    //conditionally showing the cart icon
    function cartIcon() {
        const isInCart = cartItems.some(item => item.id == photo.id)
        if (isInCart) {
            return <BsFillCartCheckFill 
                className="cart" 
                onClick={() => removeFromCart(photo.id)} 
            />
        } else if (hovered) {
            return <BsCartPlus 
                className="cart" 
                onClick={() => addToCart(photo)} 
            />
        }
    }

    return (
        <div className="product-container">
            <div 
                className={`${className} image-container`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <Link to={`/store/${linkToProduct}`}>
                    <BiCommentDetail className="detial-icon"/>
                </Link>
                
                <img
                    src={photo.address} 
                    // className="image-grid"
                    className="product-image"
                    // ref={ref}
                />
                {heartIcon()}
                {cartIcon()}
                
                <div className="product-textbox">
                    <h2>{photo.description} </h2>
                </div>
                
            </div>
            

        </div>
    )
}

Image.propTypes  = {
    className: PropTypes.string,
    photo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        address: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image