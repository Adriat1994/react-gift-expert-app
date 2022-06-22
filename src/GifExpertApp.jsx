import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']) 
  
  const onAddCategory = (NewCategory) => {

    if( categories.includes(NewCategory)) {
      window.alert('La categoría ya existe')
      return;
    } else if (categories.toString().toLowerCase().includes(NewCategory)) {
      window.alert('La categoría ya existe')
      return;
    }

    
    setCategories([NewCategory, ...categories])
    
    
  }



  return (
    <>
    
       <h1>Busca tus gifs favoritos!</h1>

        <AddCategory 

          onNewCategory={ (value) => onAddCategory(value)}
          

        />
         {
          categories.map((category) => (
              <GifGrid 
                key={category} 
                category={category}                
              />             
            ))
          }     
        
        
            

    </>
  )
}
