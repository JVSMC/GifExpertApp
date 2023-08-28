import { getGifs } from "./helpers/getGifs"

export const GifGrid = ({ category }) => {
    getGifs( category );

    return (
        <>
            <h3>{category}</h3>
        </>
    )
}

/**
 * Este componente nos ayuda a renderizar las imagenes de tipo gif
 * segun la categoria de gifs
 */