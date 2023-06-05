import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import "./LeftMenu.scss";

export function LeftMenu() {
  const { pathname } = useLocation();

  //Si la ruta seleccionada es igual al pathname de la pagina donde nos encontramos devolvera true
  const isCurrentPage = (route) => {
    return route === pathname;
  }

  return (
    <div className='left-menu'>
      <Menu secondary vertical fluid>
        <Menu.Item 
          as={Link} 
          to="/" 
          name='Inicio' 
          icon="home" 
          active={isCurrentPage("/")}
        />
        <Menu.Item 
          as={Link} 
          to="/artists" 
          name='Artistas' 
          icon="users" 
          active={isCurrentPage("/artists")}
        />
        <Menu.Item 
          as={Link} 
          to="/albums" 
          name='Albumes' 
          icon="window maximize outline" 
          active={isCurrentPage("/albums")}
        />
      </Menu>
      <Menu secondary vertical fluid>
        <Menu.Item 
          name='Nueva canción' 
          icon="plus" 
          link onClick={() => console.log("Subir cancion")}
        />
        <Menu.Item 
          name='Nueva álbum' 
          icon="plus" 
          link onClick={() => console.log("Crear álbum")}
        />
        <Menu.Item 
          name='Nuevo artista' 
          icon="plus" 
          link onClick={() => console.log("Crear artista")}
        />
      </Menu>
    </div>
  );
}
