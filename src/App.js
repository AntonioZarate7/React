import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import {getAuth, onAuthStateChanged } from "firebase/auth"
import {LoggedNavigation} from './routes/LoggedNavigation';

function App() {
  const [user, setUser] = useState(undefined);
  const auth = getAuth();

  //Funcion que devuelve un callback
  onAuthStateChanged(auth, (user) => {
    console.log(user);
  });

  if(user === undefined){
    return null;
  }

  return (
    <div className="App">
      <h1>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
      </h1>
    </div>
  );
}

export default App;
