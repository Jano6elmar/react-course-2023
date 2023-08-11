import { useState } from 'react';


export const AddCategory = ( { onNewCategroy } ) => {
    
    const [inputValue, setInputValue] = useState( '' )
    
    const onInputChange = ( {target}) => {
        //console.log( target.value );
        setInputValue( target.value )
    }

    const onSubmit = ( event ) => { 
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return; //salgo de la función
        //console.log( inputValue );
        //setCategories( categories => [inputValue, ...categories] )
        onNewCategroy( inputValue.trim() )
        setInputValue('');
    } 
    
    return (
        <form onSubmit={ (event) => onSubmit(event)}>

            <input 
                type="text"
                placeholder="Buscar gifs"
                value= {inputValue}
                onChange={  onInputChange }
            />
        </form>

    )
}
