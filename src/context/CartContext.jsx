import { createContext, useState } from "react";

//creamos un contexto llamado CartContext
const CartContext = createContext ()

const CartProvider = ( { children }) => {
    const [cart, setCart] = useState ([])

    const addProductInCart = (newProducto) => {

        const condicion = isInCart (newProducto.id)
        if (condicion) {
            //sumar cantidades
            const tempCart = [...cart]
            const findIndex = tempCart.findIndex((productCart) => productCart.id === newProducto.id )
            tempCart[findIndex].quantity = tempCart[findIndex].quantity + newProducto.quantity
            
            setCart(tempCart)
        }else {
            //guardarlo como producto nuevo
            setCart([ ...cart, newProducto ])
        }
      }
        
    

    // funcion que devuelve true o false (si el producto a comprobar esta en el carrito)
    const isInCart = (idProduct) => {
        return cart.some( (productCart) => productCart.id === idProduct )
    }

    // cantidad total de productos
    const totalQuantity = () => {
        const quantity = cart.reduce( (total, productCart) => total + productCart.quantity, 0)
        return quantity
    }

    // precio total de la compra
    const totalPrice = () => {
        const precio = cart.reduce ((total, productCart) => total + (productCart.quantity * productCart.precio), 0)
        return precio
    }

    //eliminar producto
    const deleteProductById = (idProduct) => {

        const filterProducts = cart.filter((productCart) => productCart.id !== idProduct  )
        setCart (filterProducts)
    }

    //eliminar todos los productos
    const deleteCart = () => {
        setCart ([])
    }

    return (
        <CartContext.Provider value={{cart, addProductInCart, totalQuantity, totalPrice, deleteProductById, deleteCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider, CartContext}