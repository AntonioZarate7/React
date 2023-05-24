import React, { useState } from 'react';
import { Form, Icon } from 'semantic-ui-react';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './RegisterForm.data';
import { Auth } from "../../../api/";
import "./RegisterForm.scss";

const auth = new Auth();

export function RegisterForm(props) {

  const { goBack, openLogin } = props; //Recibe las funciones para el cambio de estado del tipo de formulario que se solicita
  const [ showPassword, setShowPassword ] = useState(false); //cambio de estado para ocultar o mostrar el password capturado

  const onShowHidenPassword = () => setShowPassword((prevState) => !prevState);

  /**
   * Funcion que setea los valores iniciales de los input del formulario
   * Funcion que realiza la validacion del formulario
   * Funcion que recupera los datos capturados en el formulario
   */
  const formik = useFormik({
    initialValues: initialValues(), //Muestra los valores iniciales del formulario 
    validationSchema: validationSchema(), //Configuracion para las validaciones del formulario
    validateOnChange: false, //Hace que el formulario se valide hasta que se envia y no mientas escribes

    //La funcion que se ejecutara cuando se envie el formulario
    onSubmit: async (formValue) => {
      console.log("Registro OK");
      console.log(formValue);
      try{
        await auth.register(formValue.email, formValue.password);
      }catch(error){
        console.error(error)
      }
    },
  });

  //Es necesario darle el mismo nombre a los campos, que el del objeto con los valores iniciales para poder manejar el cambio con formik
  return (
    <div className='register-form'>
      <h1>
        Empieza a escuchar con una cuenta de Musicfy gratis
      </h1>
      <Form onSubmit={formik.handleSubmit}> 
        <Form.Input 
          name='email'
          type='text'
          placeholder="Correo electronico"
          icon="mail outline" /* Nombre del icono del semantic */
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
        />
        <Form.Input 
          name='password'
          type={showPassword ? "text" : "password"} /** Si el valor del estado es true muestra el password como texto */
          placeholder="Password"
          icon={
            <Icon 
              name={showPassword ? "eye slash" : "eye" } /** Si el valor del estado de showPassword es false mostrara el icono normal, en caso contrario lo muestra con el slash */
              link
              onClick={ onShowHidenPassword } /** Llama la funcion onShowHidenPassword para registrer el cambio de estado */
            />
          }
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.errors.password}
        />
        <Form.Input
          name='userName'
          type='text'
          placeholder="Nombre de usuario"
          icon="user circle outline"
          onChange={formik.handleChange}
          value={formik.values.userName}
          error={formik.errors.userName}
        />
        <Form.Button 
          type='submit'
          primary fluid 
          loading={formik.isSubmitting}
        >
          Continuar
        </Form.Button>
      </Form>

      <div className='register-form__options'>
        <p onClick={goBack}>Volver</p>
        <p>
          ¿Ya tienes Musicfy? <span onClick={openLogin}>Iniciar sesión</span>
        </p>
      </div>
    </div>
  );
}
