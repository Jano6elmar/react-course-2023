import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GIfGrid"


export const GifExpertApp = () => {
  //nunca poner condicionalmente los hooks
  const [categories, setCategories] = useState( [ 'One Punch'] )
  
  const onAddCategory = ( newCategory ) => {
    
    if( categories.includes( newCategory) ) return;
    //console.log(newCategory)
    //setCategories( [...categories,  'new category'] )
    setCategories( [ newCategory, ...categories ] )

    //setCategories( cat => [ ...cat, 'new category' ] ); funciona igual
  }
   
  return (
    <>
        {/* título */}
        <h1>GifExpertApp</h1>
      
        {/* input */}
        <AddCategory 
            //setCategories= { setCategories } 
            onNewCategroy={ (value) => onAddCategory( value ) }
        />

       
       
          { categories.map( (category) => (
            <GifGrid key={ category } category={category}/>
            
                
              )) 
          }
          GifGrid
        
            {/* Gif item */}
    </>
  )
}
