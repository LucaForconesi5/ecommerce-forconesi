import { useState, useEffect } from "react"
import { getProductos } from "../../data/data.js"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList.jsx"
import "./itemlistcontainer.css"


const ItemListContainer = ({saludo}) => {
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState(true)
    const {idCategoria} = useParams ()
    
    useEffect(() => {
        setLoading (true)

        getProductos ()
            .then((dataProductos) => {
                if(idCategoria) {
                    //filtrar data
                    const filterProductos = dataProductos.filter((producto) => producto.categoria === idCategoria )
                    setProductos(filterProductos)
                } else {
                    //sino, guarda los productos
                    setProductos(dataProductos)
            }
        })
        .catch( (error) => {
            console.error(error)
        })
        .finally (() => {
            setLoading(false)
        })
    }, [idCategoria])

    const stylesH3 = {color:"#A8DCE7", fontSize: "25px", fontWeight: "lighter", padding: "50px" }


    return (
        <div className="item-list-container">
            <h3 style={stylesH3}> {saludo} </h3>
            {
                loading === true ? (
                    <div>Cargando...</div>
                ) : (
                    <ItemList productos={productos} />
                )
            }
        </div>
    )
}

export default ItemListContainer