import React, {useState} from 'react'// A partir de la versión 17 ya no se importa react por todos lados
/**
 * Estructura
 * Título
 * Input
 * Listado del Gif
 *  -> Gif items
 */
function GifExpertApp() {
    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);
    console.log(categories);

    return (
        <>
            <h1>GifExpertApp</h1>
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

{/**
    --| Map |--
    
*/}