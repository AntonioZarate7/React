import React, { useState } from 'react';
import { Image } from 'semantic-ui-react';
import { AuthOptions, LoginForm, RegisterForm } from "../../components/Auth";
import { logoNameWhite } from "../../assets";
import "./Auth.scss";

//NAvegacion para usuarios no logueados 
export function Auth() {

  //Constante para la deteccion del tipo de formulario requerido
  const [typeForm, setTypeForm] = useState(null);

  const openLogin = () => setTypeForm("login");
  const openRegister = () => setTypeForm("register");
  const goBack = () => setTypeForm(null);

  const renderForm = () => {
    if(typeForm === "login"){
      return <LoginForm openRegister={openRegister} goBack={goBack}/>;
    }else if(typeForm === "register"){
      return <RegisterForm openLogin={openLogin} goBack={goBack}/>;
    }else{
      return <AuthOptions openLogin={openLogin} openRegister={openRegister}/>;
    }    
  };

  //Retorna la imagen del logo y debajo el componente especificado en el estado
  return (
    <div className='auth'>
      <div className='auth__content'>
        <Image 
          src={logoNameWhite}
          alt="Musicfy"
          className='auth__content-logo'
        />
        {renderForm()}
      </div>      
    </div>
  );
}
