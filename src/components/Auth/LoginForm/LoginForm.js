import React, {useState} from 'react';
import { Form, Icon } from 'semantic-ui-react';
import { useFormik } from 'formik';
import { Auth } from '../../../api';
import { initialValues, validationSchema } from './LoginForm.data';
import "./LoginForm.scss";

const auth = new Auth();

export function LoginForm(props) {

  const { goBack, openRegister } = props;
  const [ showPassword, setShowPassword ] = useState(false);

  const onShowHidenPassword = () => setShowPassword((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,

    //La funcion que se ejecuta cuando se envia el formulario
    onSubmit: async (formValue) => {
      console.log("Formulario enviado...");
      console.log(formValue);
      try{
        await auth.login(formValue.email, formValue.password);
      }catch(error){
        throw error
      }
    }
  });

  return (
    <div className="login-form">
      <h1>
        Música para todos
      </h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Input
          name="email"
          type="text"
          placeholder="Correo electrónico"
          icon="mail outline"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
        />
        <Form.Input
          name="password"
          type={ showPassword ? "texy" : "password"}  
          placeholder="Password"
          icon={
            <Icon
              name={ showPassword ? "eye" : "eye slash"}
              link /** Permite que el logo se pueda cliquear*/
              onClick={ onShowHidenPassword }
            />
          }  
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.errors.password}      
        />
        <Form.Button
          type='submit'
          primary fluid 
          loading={formik.isSubmitting}
        >
          INICIAR SESIÓN
        </Form.Button>
      </Form>
      <div className='register-form__options'>
        <p onClick={goBack}>Volver</p>
        <p>
          ¿No tienes cuenta ? <span onClick={openRegister}>Regístrarse</span>
        </p>
      </div>
    </div>
  )
}
