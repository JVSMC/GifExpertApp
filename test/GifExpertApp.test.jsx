import { fireEvent, render, screen } from "@testing-library/react";
import GifExpertApp from "../src/GifExpertApp";

describe('Pruebas en componente <GifExpertApp/>', () => {
    
    test('Debe evitar agregar una categoria que existe', () => {
        
        const newCategory = 'Bojack';
        

        render(<GifExpertApp/>);
        // screen.debug();

        //Extraer elementos a usar
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        //Simular disparo de evento
        fireEvent.input(input, {target: {value: newCategory}});
        fireEvent.submit( form );
        //Simular disparo del evento 2
        fireEvent.input(input, {target: {value: newCategory}});
        fireEvent.submit( form );

        //Comprobar que solo acepta la existencia de una sola categoria
        expect( screen.getAllByText(newCategory).length).toBe(1);
    });

    test('Debe de renderizar el titulo de la categoria', () => {
        render(<GifExpertApp/>);
        //screen.debug();

        const titleCategory = screen.getByRole('heading',{level: 3}).innerHTML;
        expect(titleCategory).toBeTruthy();
    });
});