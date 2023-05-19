import React from 'react';
import { Button } from 'semantic-ui-react';

export function RegisterForm(props) {

  //Recibe las funciones para el cambio de estado del tipo de formulario que se solicita
  const {goBack, openLogin } = props;

  return (
    <div style={{ backgroundColor: "#f00" }}>
      <h1>
        RegisterForm screen
      </h1>
      <Button primary onClick={openLogin}>Login</Button>
      <Button secondary onClick={goBack}>Atras</Button>
    </div>
  );
}
