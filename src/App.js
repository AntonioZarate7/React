import React, { useState } from 'react';
import {getAuth, onAuthStateChanged } from "firebase/auth"
import {LoggedNavigation} from './routes/LoggedNavigation'; 
import {Auth } from "./pages";

function App() {
  const [user, setUser] = useState(undefined);
  const auth = getAuth();

  //Funcion que devuelve un callback
  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  if(user === undefined){
    return null;
  }

  return user ? <LoggedNavigation/> :  <Auth/>
}

export default App;
