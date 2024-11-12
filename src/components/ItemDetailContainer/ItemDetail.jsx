import React from "react"
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./itemdetail.css";


const ItemDetail = ({ producto }) => {
  const [showItemCount, setShowItemCount] = useState (true)

  const { addProductInCart } = useContext (CartContext)

  const addProduct = (count) => {
    const productCart = {...producto, quantity: count}

    addProductInCart (productCart)
    setShowItemCount(false)
  }

  return (
    <div className="item-detail-container">
      <div className="item-detail-image">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>

      <div className="item-detail-info">
        <h1 className="item-detail-title">{producto.nombre}</h1>
        <p className="item-detail-price">Precio: ${producto.precio}</p>
        <p className="item-detail-description">{producto.descripcion}</p>
        <button className="item-detail-button">Comprar ahora</button>
        {
          showItemCount === true ? (
            <ItemCount stock={producto.stock} addProduct={addProduct}/>
          ) : (
              <Link to="/cart">Terminar mi compra</Link>
          )
        }
        
      </div>
    </div>
  );
};

export default ItemDetail
