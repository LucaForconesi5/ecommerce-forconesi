import { useState } from "react"
import FormFinal from "./FormFinal"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection } from "firebase/firestore"
import db from "../../db/db"
import { Link } from "react-router-dom"
import validateForm from "../../utils/validateForm.js"
import { toast } from "react-toastify"
import './final.css'


const Final = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
    emailConfirmation: "",
  })
  const [idOrder, setIdOrder] = useState(null)
  const {cart, totalPrice, deleteCart} = useContext(CartContext)

  const handleChangeInput = (event) => {

    setDataForm({...dataForm, [event.target.name]: event.target.value})
  }

  const handleSubmitForm = async(event) => {
    event.preventDefault()

    const validation = await validateForm(dataForm);
    if (validation.status === "error") {
      toast.error(validation.message);
      return; 
    }

    const order = {
      buyer: {...dataForm},
      productos: [...cart],
      date: Timestamp.fromDate (new Date()),
      total: totalPrice ()
    }

    try {
      const response = await validateForm(dataForm)
    
        if(response.status === "error") throw new Error(response.message)

          toast.success("Subiendo orden...")
          uploadOrder(order)

    } catch (error) {
      toast.error(error.message)
    }

  }

  const uploadOrder = (newOrder) => {
    const ordersRef = collection (db, "orders")
    addDoc(ordersRef, newOrder)
      .then((response) => setIdOrder(response.id) )
      .catch ((error) => console.log(error))
      .finally(()=> {
        //Finalizada la orden, borramos los productos
        deleteCart()
      })
  }

  return (
    <div className="final-container">
      {
        idOrder === null ? (
          <div className="form-container">
          <FormFinal 
        dataForm={dataForm} 
        handleChangeInput={handleChangeInput} 
        handleSubmitForm={handleSubmitForm}/>
        </div>
        ) : (
          <div className="confirmation-container">
            <h2>Su orden se subió correctamente! 😁</h2>
            <p>Porfavor guarde su nro de seguimiento: {idOrder}</p>
            <Link to="/">Volver al inicio</Link>
          </div>
        )
      }
      
    </div>
  )
}

export default Final
