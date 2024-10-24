import { useState, useEffect } from "react"
import { getProductos } from "../../data/data.js"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    
  const [producto, setProducto] = useState ({})
  const {idProducto} = useParams()

  useEffect (() => {
    getProductos()
        .then ((data) => {
            const findProducto = data.find((producto) => producto.id === idProducto )
            setProducto (findProducto)
        })
  }, [idProducto])

  return (
    <ItemDetail producto={producto} />
  )
}

export default ItemDetailContainer
