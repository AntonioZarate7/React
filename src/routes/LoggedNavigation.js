//Se encarga de cargar todas las rutas de la zona de usuarios logueados 
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoggedLayout } from '../layouts';
import { Home, Artists, Artist, Albums, Album, Profile } from "../pages";

export  function LoggedNavigation() {

  //Path de cada uno de los componentes de la aplicacion
  return (
    <BrowserRouter>
      <LoggedLayout> {/** Envuelve todas las paginas para darles a todas el mismo estilo base */}
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/artists' element={<Artists/>}/>
            <Route path='/artists/:id' element={<Artist/>}/>
            <Route path='/albums' element={<Albums/>}/>
            <Route path='/albums/:id' element={<Album/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </LoggedLayout>
    </BrowserRouter>
  );
}
