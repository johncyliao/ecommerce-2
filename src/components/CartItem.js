import React, {useContext, useState, useRef} from "react"
import { BsTrashFill, BsTrash } from 'react-icons/bs';
import { Context } from "../Context";
// import useHover from "../hooks/useHover"


function CartItem({item}) {
    const {removeFromCart} = useContext(Context)
    const [hoveredTrash, setHovered] = useState(false)
    // const [hovered, ref] = useHover()
    
    function trashIcon() {
        if (hoveredTrash) {
            return <BsTrashFill className="trashbin" />
        }
        return <BsTrash className="trashbin" />
    }

    return (
        <div className="cart-item">
            {/* a div to represent the trash bin icon */}
            <div
                onClick={() => removeFromCart(item.id)}
                // ref={ref}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {trashIcon()}
            </div >
            
            <img src={item.address}/>
            <h3 className="cart-item-name">{item.name} </h3>
            
            <p className="cart-item-price">${item.price}</p>
        </div>
    )
}

export default CartItem