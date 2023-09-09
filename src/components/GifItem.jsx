import PropTypes from "prop-types";//1.-

export const GifItem = ({gifsTitle, gifsUrl, gifsId}) =>{
    //console.log(gifsUrl)
    return(
        <div className="card">
            <img src={gifsUrl} alt={gifsTitle} />
            <p>{gifsTitle}</p>
        </div>
    )
}

GifItem.propTypes = {//2.-
    gifsTitle: PropTypes.string.isRequired,
    gifsUrl: PropTypes.string.isRequired,
}

/**
 * Para hacer las pruebas con las proptypes, es necesario agregar una dependencia
 * que nos permita hacer pruebas, en este caso se usa yarn add prop-types
 
    --| Para hacer pruebas en proptypes|--
    1.- Hacer la importacion de los proptypes
    2.- Hacer estructura de pruebas
    3.- Hacer estructura de carpetas dentro de la carpeta test
    4.- No hay que olvidar que los archivos de test para componentes es
        con extension ' .test.jsx ' y que deben ser nombrados igual que el
        archivo al cual se le hacen las pruebas
*/