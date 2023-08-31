import { useEffect, useState } from "react";
import { getGifs } from "./helpers/getGifs"
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async() =>{
        const newImages = await getGifs(category);
        //console.log(newImages[0].title);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    }, []);

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
               {images.map( ({id, title, url}) =>
                    // <li key = {categoryGif.id}>{categoryGif.title}</li>
                    <GifItem
                        key = {id}
                        gifsTitle = {title}
                        gifsUrl = {url}
                    />
                )}
            </div>
        </>
    )
}

/**
 * Este componente nos ayuda a renderizar las imagenes de tipo gif
 * segun la categoria de gifs, sin embargo cada vez que el componente 
 * tiene un cambio y/o es invocado, React vuelve a dibujar dicho componente
 * haciendo que el llamado de la función getGifs, se vuelva a ejecutar.
 * 
 * --|useEfect|--
 * Con el useEfect, podemos renderizar la función getGifs solo una vez, sin importar que
 * nuestro componente se actualice, por eso el segundo argumento del useEffect es un
 * juego de corchetes vacios.
 * A pesar de hacer uso del useEffect, se sigue disparando 2 veces cada petición,
 * esto solo pasa en el entorno de desarrollo, esto se debe a la etiqueta React.StrictMode
 * que se encuentra en el archivo principal.
 * 
 * --| Previo a Refactorizacion |--
 * Previo a la refactorizacion, se tenia el siguiente codigo
 * 
    {images.map( categoryGif =>
        <li key = {categoryGif.id}>{categoryGif.title}</li>
    )}

    --| Refactorización 2 |--

 */