const productos = [
    {
        id: "A1",
        nombre: "Uncharted 4",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis placeat voluptatem officiis error possimus porro corrupti provident, rem eos deleniti delectus ea illo, quas laudantium ab ex consequatur molestias natus?",
        stock: 3,
        precio: 22500,
        imagen: "/img/uncharted.jpg",
        categoria: "Juegos"
    },
    {
        id: "A2",
        nombre: "The Last Of Us I",
        descripcion: "Saga TLOU",
        stock: 5,
        precio: 20700,
        imagen: "/img/tlou.jpg",
        categoria: "Juegos"
    },
    {
        id: "B1",
        nombre: "Nintendo 3DS",
        descripcion: "Nintendo",
        stock: 2,
        precio: 123500,
        imagen: "/img/nintendo3ds.jpg",
        categoria: "Consolas"
    },
    {
        id: "B2",
        nombre: "Nintendo DS",
        descripcion: "Nintendo",
        stock: 4,
        precio: 112500,
        imagen: "/img/nintendods.webp",
        categoria: "Consolas"
    },
    {
        id: "C1",
        nombre: "Luffy Muñeco",
        descripcion: "One Piece Merch",
        stock: 7,
        precio: 7200,
        imagen: "/img/luffy.jpg",
        categoria: "Merch"
    },
    {
        id: "C2",
        nombre: "Naruto Muñeco",
        descripcion: "Naruto Merch",
        stock: 15,
        precio: 2500,
        imagen: "/img/naruto.png",
        categoria: "Merch"
    }
]

/* HAY OTRA FORMA DE "PROMESA" MEJOR QUE ESTA
    const condicion = false
    const promesa = new Promise( (resolve, reject) => {
        if(condicion) {
            resolve("Se resolvió la promesa")
        } else {
            reject ("Se rechazó la promesa")
        }
    })

     promesa
        .then( (respuesta) => {
            console.log(respuesta)
    })
        .catch( (error) => {
            console.error(error)
    })
    .finally (() => {
        console.log("Finalizo la promesa")
    })

    */

const getProductos = () => {
    return new Promise ((res, rej) => {
        setTimeout (() => {
            res(productos)
        }, 2000)
    })
}

export {getProductos}