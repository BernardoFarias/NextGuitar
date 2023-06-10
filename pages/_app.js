import '@/styles/globals.css'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {

    const cartLS = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("cart")) ?? [] : []

  const [cart, setCart] = useState(cartLS)
  const [pageReady, setPageReady] = useState(false)

  useEffect(() => {
    setPageReady(true)
  },[])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  },[cart])

  const addToCart = guitar => {

    if(cart.some(guitarState => guitarState.id === guitar.id)) {
        // Find the guitar duplicated
        const cartUpdated = cart.map( guitarState => {
            if(guitarState.id === guitar.id){
                // Edit the quantity
                guitarState.quantity = guitar.quantity
            }
            return guitarState
        })
        // Edit the cart
        setCart(cartUpdated)
    } else {
        // New record, Add to Cart
        setCart([...cart, guitar])
    }
}

const updateQuantity = guitar => {
    const cartUpdated = cart.map(guitarState => {
        if(guitarState.id === guitar.id){
            guitarState.quantity = guitar.quantity
        }
        return guitarState
    })
    setCart(cartUpdated)
}

const deleteGuitar = id => {
    const cartUpdated = cart.filter( guitarState => guitarState.id !== id )
    setCart(cartUpdated)
}

  return pageReady ? <Component {...pageProps} 
    cart={cart}
    addToCart={addToCart}
    deleteGuitar={deleteGuitar}
    updateQuantity={updateQuantity}
    /> : null
}
