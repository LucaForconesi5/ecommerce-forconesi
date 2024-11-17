const FormFinal = ({dataForm, handleChangeInput, handleSubmitForm}) => {
  return (
    
      <form onSubmit={handleSubmitForm}>
        <label>Nombre completo</label>
        <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput}/> 

      <label>Telefono</label>
      <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput}/>

      <label>Email</label>
      <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput}/>

      <label>Confirmar Email</label>
      <input type="email" name="emailConfirmation" value={dataForm.emailConfirmation} onChange={handleChangeInput} />

      <button type="submit">Enviar mi orden</button>
      </form>
    
  )
}

export default FormFinal
