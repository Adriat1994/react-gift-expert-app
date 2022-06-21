import { useState } from "react"


/* AQUI indicamos los props, la información de parte del padre que le está llegando al hijo */
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')
    //Nuestro inputValue inicial es un string vacio, y lo que queremos es que cuando el valor de este input cambie, el cambio se comunique a través del hook

    //Con esta función, lo que se hace es que cuando cambia el valor del input, esto se comunique 
    const onInputChange = (event) => {
        //El evento es el que se produce al escribir en el input
        //event.target.value será todo lo que nosotros hemos escrito en el input

        setInputValue(event.target.value)
    }

    //Cogemos la información que nos manda el padre, cogemos onNewCategory y le añadimos nuestro inputValue
    const onSubmit = (event) => {
        event.preventDefault(); 
        
        if(inputValue.trim().length <= 1) return; //Esto hace que si nuestro inputValue tiene 1 o menos caracteres, no se inserta en onNewCategory

        
        onNewCategory(inputValue.trim());
        setInputValue(''); //Esto hace que al insertar el inputvalue, su valor se cambie a vacio, para no tener que borrar
    }

  return (
    //Hacemos un formulario que incluya nuestro input, de manera que al escribir algo en nuestro input, este valor se detecte y luego se mande a nuestro componente padre
    <form onSubmit={(event) => onSubmit(event)}>    
        <input 
            type="text"
            placeholder="Buscar gifs"
            value={inputValue} //Valor por defecto de nuestro input
            onChange={onInputChange}
        />
    </form>
    
  )
}
