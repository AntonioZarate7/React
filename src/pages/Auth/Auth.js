import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { AuthOptions, LoginForm, RegisterForm } from "../../components/Auth";

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

    }
    return <AuthOptions openLogin={openLogin} openRegister={openRegister}/>;
  };

  return (
    <div>
      {renderForm()}
    </div>
  );
}
