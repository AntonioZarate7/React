import React from 'react';
import { Button } from 'semantic-ui-react';


export function LoginForm(props) {

  const { goBack, openRegister } = props;

  return (
    <div style={{ backgroundColor: "#f00" }}>
      <h1>
        LoginForm screen
      </h1>
      <Button primary onClick={openRegister}>Registro</Button>
      <Button secondary onClick={goBack}>Atras</Button>
    </div>
  )
}
