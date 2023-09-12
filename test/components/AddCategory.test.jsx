import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en AddCategory', () => {
    test('debe de cambiar el valor de la caja de texto', () => {
        
        render( <AddCategory onNewCategory={ ()=>{} }/> );
        // screen.debug();
        const input = screen.getByRole('textbox');//1.-
        fireEvent.input( input, { target:{ value: 'Saitama' } } );//2.-
        
        expect( input.value ).toBe('Saitama');
    });

    test('debe llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Saitama';

        render( <AddCategory onNewCategory={ ()=>{} }/> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        //Se establece el valor al input
        fireEvent.input( input, { target:{ value: inputValue } } );
        
        fireEvent.submit( form );
        //screen.debug();

        //Verificamos que el valor del input regrese a un estado vacio  
        expect( input.value ).toBe('');
    });
});
/**
 * 1.- Realizamos la busqueda de un elemento de tipo textbox
 * 2.- Nos permite realizar un disparo de evento, el primer argumento
 *     es el componente a evaluar, el segundo argumento es la parte del 
 *     evento que es de nuestro interes, en este caso el evento que es
 *     buscamos se encuentra dentro de target que a su vez tiene un objeto 
 *     llamado value, todo esto se puede ver en la función onInputChange de
 *     el componente AddCategory
 */