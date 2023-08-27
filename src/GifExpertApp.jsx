import React, {useState} from 'react'// A partir de la versión 17 ya no se importa react por todos lados
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
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

    const onAddCategory = (newCategory) => {
        //console.log(newCategory);
        if (categories.some(category => newCategory.toLowerCase() === category.toLowerCase())) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                // handleCategory={ setCategories }
                onNewCategory={ event => onAddCategory(event)}//on nos permite saber que el componente emite algo
            />
            {/* CONSTRUCCIÓN DE MANERA DINAMICA */}
            { categories.map( category =>
                    <GifGrid 
                        key = {category}
                        category = {category}
                    />
                ) }
        </>
    )
}

export default GifExpertApp

/**
    --| Map |--
    Metodo que crea un nuevo array a partir de los items de un array establecido
    
    --| onNewCategory |--
    Esta property, pasa como valor una función, la cual espera recibir un evento emitido por
    el componente AddCategory, esto con el proposito de que la parte funcional de la modificación
    del prop sea en el componente padre
*/