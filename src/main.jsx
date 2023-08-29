import React from 'react';
import ReactDOM from 'react-dom/client';
import GifExpertApp from './GifExpertApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <GifExpertApp/>
  // </React.StrictMode>,
)

/**
 * Se puede remover el Reac.StrictMode debido a que esto solo 
 * se usa en desarrollo para garantizar el correcto funcionamiento 
 * de los componentes de React, sin embargo cuando se hacen pruebas
 * como en este caso, que intentamos importar la data de una api e 
 * imprimirla en la consola segun sea el numero de elementos construidos
 * por un proceso dinamico, tiende a imprimirse dos veces, por ende 
 * se comenta el React.StrictMode 
 */
