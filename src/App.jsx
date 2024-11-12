import NavBar from "./components/NavBar/NavBar"
import logo from "./assets/fav.jpg"

import ComponentePadre from "./components/Ejemplos/ComponentePadre"
import ComponenteHijo from "./components/Ejemplos/ComponenteHijo"

import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Cart from "./components/Cart/Cart"

import './App.css'


function App() {

  return (
    <div className='container-app'>
      <BrowserRouter>

        <CartProvider>
          
          <NavBar /> 

            <Routes> 
              <Route path="/" element={<ItemListContainer saludo = {"¡Bienvenidos! eCommerce de Videojuegos en construcción 👷‍♂️🚧"} /> } />
              <Route path="/categoria/:idCategoria" element={<ItemListContainer saludo = {"¡Bienvenidos! eCommerce de Videojuegos en construcción 👷‍♂️🚧"} /> } />
              <Route path="/detail/:idProducto" element={<ItemDetailContainer /> } />
              <Route path="/cart" element={<Cart />} />
            </Routes>

        </CartProvider>

      </BrowserRouter>

    </div>
  )
}

export default App
