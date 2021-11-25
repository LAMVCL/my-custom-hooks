import React, { useState } from 'react'

//UseForm recibe un objeto vacio
export const useForm = (initialState = {}) => {

    //Encargado de manejar los valores del formulario.
    const [values, setValues] = useState(initialState);

    //Reiniciamos el input
    const reset = () =>{
        setValues(initialState);
    }

    const handleInputChange = ({target}) =>{
        //Cuando cambia le pasamos a setvalue una copia del valor y lo asignamos.
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return (
        [values, handleInputChange, reset]
    );
}
