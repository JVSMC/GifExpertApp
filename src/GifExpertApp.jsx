import React, {useState} from 'react'// A partir de la versión 17 ya no se importa react por todos lados
import { AddCategory } from './components/AddCategory';
/**
 * Estructura
 * Título
 * Input
 * Listado del Gif
 *  -> Gif items
 */
function GifExpertApp() {
    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);
    //console.log(categories);

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory handleCategory={ setCategories }/>
            {/* CONSTRUCCIÓN DE MANERA DINAMICA */}
            <ol>
                { categories.map( category =>{
                    return <li key={category}>{category}</li>
                } ) }
            </ol>
        </>
    )
}

export default GifExpertApp

/**
    --| Map |--
    Metodo que crea un nuevo array a partir de los items de un array establecido

*/