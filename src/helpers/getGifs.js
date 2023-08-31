export const getGifs = async( category ) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=rTvAjGOs7Q5XZLlnYmO9PEP0tZTAJbLf&q=${ category }&limit=10`
    const resp = await fetch( url );
    const {data}= await resp.json();

    const gifs = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    //console.log(gifs);
    return gifs;
}


/**
 * --|getGifs|--
 * Esta función es código nativo de JS, sin embargo nos permite el 
 * interactuar con nuestra API, el url se extra con ayuda de Postman
 * y poder configurar correctamente el Endpoint de la API
 * 
 * Esto permite retornar un array que contiene 10 objetos con la siguiente
 * información:
 * id, title y url
 */