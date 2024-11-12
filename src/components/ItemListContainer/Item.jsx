import { Link } from "react-router-dom"


const Item = ({producto}) => {
  return (
      <Link to={"/detail/" + producto.id} className="item-card">
            <img className="item-img" src={producto.imagen} alt="" />
            <h3 className="item-nombre">{producto.nombre}</h3>
            <h4 className="item-precio">Precio: ${producto.precio}</h4>
      </Link>
  )
}

export default Item
