const ItemListContainer = ({saludo}) => {

    const stylesH3 = {color:"black", fontSize: "25px", fontWeight: "lighter", padding: "50px" }

    return (
        <div>
            <h3 style={stylesH3}> {saludo} </h3>
        </div>
    )
}

export default ItemListContainer