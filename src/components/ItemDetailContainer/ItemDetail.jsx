const ItemDetail = ({producto}) => {
  return (
    <div style={{display:"flex"}}>
      <img src={producto.imagen} width={300} alt="" />
      <div>
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p>Precio: ${producto.precio}</p>
      </div>
    </div>
  )
}

export default ItemDetail
