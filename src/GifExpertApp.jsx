import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']) 
  //Este hook sirve para controlar el estado de una constante, que en nuestro caso es categories, nuestras categorias
  //Cada vez que se produzca un cambio en las categorías, el hook va a actualizar la información que se muestra, ya sea porque se añaden o porque se eliminan elementos


  //NewCategory es el evento que recibe el padre por parte del hijo, es decir, el valor del input insertado
  const onAddCategory = (NewCategory) => {

    if( categories.includes(NewCategory)) {
      window.alert('La categoría ya existe')
      return;
    } else if (categories.toString().toLowerCase().includes(NewCategory)) {
      window.alert('La categoría ya existe')
      return;
    }

    
    setCategories([NewCategory, ...categories])
    //Hacemos una 'copia' de nuestras categorias existentes con un spreed de nuestras categories (...categories), y luego le añadimos la nueva categoría añadida en el input, el valor del evento
    
  }



  return (
    <>
    
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 

          //El componente AddCategory emite el valor del evento
          //onNewCategory es una propiedad del componente AddCategory
          onNewCategory={ (value) => onAddCategory(value)}
          

        />

        {/* Listado de Gifs */}
        
       
          {
          categories.map((category) => ( //hacemos un .map de categories para que nos devuelva cada category dentro de categories de forma individual, en vez de todas las categories juntas
              <GifGrid 
                key={category} 
                category={category}                
              />             
            ))
          }     
        
        
            

    </>
  )
}
