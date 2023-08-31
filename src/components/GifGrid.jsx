// import { useEffect, useState } from "react";

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs"

export const GifGrid = ({ category }) => {

    //Hook personalizado
    const { images, isLoading } = useFetchGifs( category );
    //Verificar el funcionamiento del customHook
    //console.log({ images, isLoading });
    
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
 * --| Previo a Refactorizacion |--
 * Previo a la refactorizacion, se tenia el siguiente codigo
 * 
    {images.map( categoryGif =>
        <li key = {categoryGif.id}>{categoryGif.title}</li>
    )}
 */