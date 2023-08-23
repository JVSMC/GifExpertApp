import { useState } from 'react';

export const AddCategory = (props) => {

    const {handleCategory} = props;

    const [inputValue, setInputValue] = useState('');// usf

    const onInputChange = (event) => {
        //console.log(event.target.value);
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //console.log(inputValue);
        //console.log(handleCategory);
        if ( inputValue.trim().length <= 1 ) return; //Evitar que el usuario solo envie un caracter o ninguno dentro del input
        handleCategory( categories => [ inputValue, ...categories]);
        setInputValue(''); //Limpiar el valor del input
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input type="text" 
                placeholder="Buscar gif"
                value={ inputValue }
                onChange={ (event) => onInputChange(event) }
            />
        </form>
    )
}

/**
    --| onChange |--
    Este evento se usa debido que si visualizamos el input sin 
    la propiedad onChange, react envia un error diciendo que el
    input necesita ser de solo lectura, sin embargo si uno desea
    interacción con el usuario, es importante colocar que se requiere
    un evento onChange.
    
    En este caso, el evento onchange envia un evento, dicho evento
    se pasa como argumento a la función onInputChange, sin embargo
    se puede simplificar de la siguiente forma
    onChange = { (event) => onInputChange(event) }

    --| event.preventDefault() |--
    Evita que el navegador haga un refresh de la pagina web.
 
    --| destructuracion |--
    Para pasar una property entre componentes, la menera sencilla
    es haciendo una destructuración, en este caso pasamos una función
    como porperti desde el componente GifExpertApp hacia el componente
    hijo AddCategory.

    Destructuracion 1
    export const AddCategory = ({handleCategory}) => { 

        const onSubmit = (event) => {
            event.preventDefault();
            handleCategory([ inputValue ]);
        }
    }

    Destructuracion 2
    export const AddCategory = (props) => { 
        const {handleCategory} = props;

        const onSubmit = (event) => {
            event.preventDefault();
            handleCategory([ inputValue ]);
        }
    }
*/