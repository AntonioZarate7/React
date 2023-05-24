import * as Yup from "yup";

/**
 * Valores iniciales para los inputs del formulario de registro
 * @returns ---> Objeto con los valores iniciales del los inputs
 * @author AntonioZarate
 */
export function initialValues(){
    return{
        email: "",
        password: "",
        userName: "",
    };
}

/**
 * Configuraciones para las validaciones del formulario de registro
 * @returns ---> Objeto con las valicacines que debe de tener el formulario de registro
 * @author AntonioZarate
 */
export function validationSchema(){
    return Yup.object({
        //Otra forma de presentar el error, si deseamos que nos muestre un error especifico
        //email: Yup.string().email("Email invalido").required("Es obligatorio"),
        email: Yup.string().email(true).required(true),
        password: Yup.string().required(true).min(8, "El password debe tener al menos 8 caracteres"), //Especifica que el password debe terner al menso 8 caracteres
        userName: Yup.string().required(true) //Especifica que si o si es requerido un userName
    });
}