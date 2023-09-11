import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en getGifs()', () => {
    test('debe de retornar un arreglo de gifs', async() => {
        const gifs = await getGifs('Bojack');
        //console.log(gifs);
        expect( gifs.length ).toBeGreaterThan(0);//1.-
        gifs.forEach(element => {
            expect( element ).toEqual({ //2.-
                id: expect.any( String ),
                title: expect.any( String ),
                url: expect.any( String ),
            })
        });
    });
});

/**
 * 1.- Nos aseguramos de tener un array mayor a 0,es decir, nos
 * aseguramos de recibir correctamente la data de la API
 * 
 * 2.- Evaluamos los gifs de manera individual todos los elementos, 
 * los cuales se espera que retornen en forma de objeto.
 */