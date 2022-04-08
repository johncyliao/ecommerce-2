import React, {createContext, useState, useEffect} from 'react'
import { photosData } from './photosData'

const Context = createContext()

const ContextProvider = ({children}) => {
    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    
    useEffect(() => {
        // fetch(url)
        //     .then(response => response.json())
        //     .then(data => setAllPhotos(data))
        setAllPhotos(photosData)
    }, [])

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }

    // pass in the whole photo object in the cartItems array
    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }

    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => id != item.id))
    }

    function emptyCart() {
        setCartItems([])
    }
    
    // console.log(allPhotos)

    return (
        <Context.Provider value={{
            allPhotos, 
            toggleFavorite, 
            addToCart, 
            cartItems, 
            removeFromCart, 
            emptyCart
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}