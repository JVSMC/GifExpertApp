import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading]= useState (true);

    const getImages = async() =>{
        const newImages = await getGifs(category);
        //console.log(newImages[0].title);
        setImages(newImages);
        setIsLoading(false);//Cuando termina de recibir las imagenes, cambia a false
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images: images,
        isLoading: isLoading,
    }
}

/**
 * Para crear un hook personalizado, es necesario escribir 
 * ' use ' al inicio, puesto que React nos recomienda llamar así
 * a nuestros hooks.
 * 
 * Debido a que es una función de JS, nosotros podemos retornar 
 * diferentes tipos de datos, sin embargo en este momento, nosotros 
 * retornamos un objeto con dos tipos de valores para el hook
    
    --|Propiedad y valor en objetos|--
    Hay que recordar que en ECMAScript6, si tenemos una propiedad
    que tiene el mismo nombre que el valor, entonces se puede simplificar 
    de la siguiente forma
    {
        images,
        isLoading: true,
    }

 * --|useEfect|--
 * Con el useEfect, podemos renderizar la función getGifs solo una vez, sin importar que
 * nuestro componente se actualice, por eso el segundo argumento del useEffect es un
 * juego de corchetes vacios.
 * A pesar de hacer uso del useEffect, se sigue disparando 2 veces cada petición,
 * esto solo pasa en el entorno de desarrollo, esto se debe a la etiqueta React.StrictMode
 * que se encuentra en el archivo principal.

*/