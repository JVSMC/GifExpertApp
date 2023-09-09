import { render, screen } from "@testing-library/react";//1.-
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem/>', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg'

    test('debe hacer match con el snapshot ', () => {
    
        const { container } = render( <GifItem  gifsTitle={ title } gifsUrl={ url }/> )//2.-
        expect( container ).toMatchSnapshot();//3.-
    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render( <GifItem  gifsTitle={ title } gifsUrl={ url }/> );
        // screen.debug(); //2.-
        const { src, alt } = screen.getByRole('img');//3.-
        
        expect( src ).toBe( url );
        expect( src ).toBe( title );
    });

    test('evaluar que exista el titulo de la imagen en texto', () => {
        render( <GifItem  gifsTitle={ title } gifsUrl={ url }/> );
        expect( screen.getByText( title ) ).toBeTruthy();//4.-
    });
});

/**
 * --| Pruebas de componentes |--
 * 1.- importamos el render para que nos permita realizar pruebas con las proptypes
 *      Hay que tener en cuenta que el render es una dependencia de react testing library
 * 2.- Agregamos el componente a testear con sus respectivas proptypes que sí o sí tiene que 
 *      pasar la prueba (Se configura en el archivo del componente)
 * 3.- Realizamos pruebas para que coincida con el snapshoot
 * 
 * --| Pruebas 2 etapa |--
 * 1.- Creamos un test para evaluar la url y el alt
 * 2.- Aquí podemos ver un render de la estructura html y de sus pruebas
 * 3.- 'screen.getByRole()' nos permite obtener los atributos de un elemento
 * 4.- Evaluamos que el titulo del componente exista, para ellos usamos ' toBeTruthy '
 */