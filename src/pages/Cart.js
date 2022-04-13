import React, {useState, useContext} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"
import "../styles/cart.css"
import ToTopBtn from '../components/ToTopBtn'

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")
    const {cartItems, emptyCart} = useContext(Context)
    let totalCost = 0
    cartItems.forEach(item => totalCost += item.price)
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))


    //simulate an order
    function placeOrder() {
        setButtonText("Loading ... ")
        setTimeout(() => {
            console.log("Order placed")
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            {
            cartItems.length > 0 &&
                <p className="total-cost">Total: {totalCostDisplay}</p>
            }
            <div className="order-button">
                {
                cartItems.length > 0 ? 
                    <button onClick={placeOrder}>{buttonText}</button> :
                    <h2 className="empty">Cart is empty</h2>
                }
            </div>
            <ToTopBtn />
        </main>
    )
}

export default Cart