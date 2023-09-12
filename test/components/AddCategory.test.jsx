import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en AddCategory', () => {
    test('debe de cambiar el valor de la caja de texto', () => {
        
        render( <AddCategory onNewCategory={ ()=>{} }/> )
        // screen.debug();
        const input = screen.getByRole('textbox');//1.-
        fireEvent.input( input, { target:{ value: 'Saitama' } } );//2.-
        
        expect( input.value ).toBe('Saitama');
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