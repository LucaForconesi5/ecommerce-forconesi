import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList.jsx"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db.js"
import "./itemlistcontainer.css"


const ItemListContainer = ({saludo}) => {
    const [productos, setProductos] = useState ([])
    
    const {idCategoria} = useParams ()

    const getProductos = () => {
        const productosRef = collection (db, "productos")
        getDocs(productosRef)
            .then((dataDb) => {
                //formatear productos
                const productosDb = dataDb.docs.map((productoDb)=> {
                    return {id: productoDb.id, ...productoDb.data()}
                })
                setProductos(productosDb)
            })
    }

    //utilizar un filtrado - categorias
    const getProductosByCategory = () => {
        const productosRef = collection (db, "productos")
        const queryCategories = query(productosRef, where("categoria", "==", idCategoria ))
        getDocs(queryCategories)
            .then((dataDb) => {
                const productosDb = dataDb.docs.map((productoDb) => {
                    return {id: productoDb.id, ...productoDb.data()}
                })

                setProductos(productosDb)
            })
    }
    
    useEffect(() => {
        if (idCategoria){
            getProductosByCategory()
        }else{
            getProductos()
        }
        
    }, [idCategoria])

    const stylesH3 = {color:"#A8DCE7", fontSize: "25px", fontWeight: "lighter", padding: "50px" }


    return (
        <div className="item-list-container">
            <h3 style={stylesH3}> {saludo} </h3>
           
            <ItemList productos={productos} />
             
        </div>
    )
}

export default ItemListContainer