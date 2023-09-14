import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');//1.-

describe('Pruebas en <GifGrid/>', () => {
    const category = 'One Punch';
    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({//2.-
            images: [],
            isLoading: true,
        })

        render(<GifGrid category={category} />);
        //screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({//2.-
            images: gifs,
            isLoading: false,
        })

        render(<GifGrid category={category} />);

        expect( screen.getAllByRole('img').length ).toBe(2);//3.-
    });
});

/**
 * 1.- Con esto realizamos el mock de cualqueir libreria y/o hoock
 * 
 * 2.- Este es el mock de un custom hook
 *     esto nos permite simular la respuesta del custom hook
 * 
 * 3.- Con esto garantizamos que se insertan 2 componentes despues de
 *     simular la respuesta del custom hook
 */