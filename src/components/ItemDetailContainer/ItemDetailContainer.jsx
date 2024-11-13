import { useState, useEffect } from "react"
import {doc, getDoc} from "firebase/firestore"
import db from "../../db/db.js"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    
  const [producto, setProducto] = useState ({})
  const {idProducto} = useParams()

  const getProductoById = () => {
    const docRef = doc(db, "productos", idProducto)
    getDoc(docRef)
      .then((dataDb)=> {
        const productoDb = {id: dataDb.id, ...dataDb.data()}

        setProducto(productoDb)
      })
  }

  useEffect (() => {
    getProductoById()
  }, [idProducto])

  return (
    <ItemDetail producto={producto} />
  )
}

export default ItemDetailContainer
