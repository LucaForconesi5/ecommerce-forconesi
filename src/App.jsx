import NavBar from "./components/NavBar/NavBar"
import logo from "./assets/fav.jpg"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

import './App.css'


function App() {

  return (
    <div>
      <NavBar /> 
      <ItemListContainer saludo = {"¡Bienvenidos! eCommerce de Videojuegos en construcción 👷‍♂️🚧"}/>

    </div>
  )
}

export default App
