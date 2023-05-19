//Se encarga de cargar todas las rutas de la zona de usuarios logueados 
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Artists, Artist, Albums, Album, Profile } from "../pages";

export  function LoggedNavigation() {

  //Path de cada uno de los componentes de la aplicacion
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/artists' element={<Artists/>}/>
          <Route path='/artists/:id' element={<Artist/>}/>
          <Route path='/albums' element={<Albums/>}/>
          <Route path='/albunms/:id' element={<Album/>}/>
          <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}
