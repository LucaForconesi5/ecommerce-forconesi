import {mixed, object, string} from "yup"

let userSchema = object({
    fullname: string().required("El campo nombre es requerido"),
    phone: mixed().required("El campo teléfono es requerido"),
    email: string().email("El campo email debe tener un @").required("El campo email debe tener un @"),
    emailConfirmation: string().email("El campo email debe tener un @").required("Debe confirmar su correo electrónico"),
})

const validateForm = async(dataForm) => {
    try {
        await userSchema.validate(dataForm, { abortEarly: false });
        if (dataForm.email !== dataForm.emailConfirmation) {
            throw new Error("Los correos electrónicos deben coincidir");
          }
        return {status: "success"}
    } catch (error) {
        return {status: "error", message: error.message}
    }
}

export default validateForm