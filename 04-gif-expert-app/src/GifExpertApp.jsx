import { useState } from "react"
import { AddCategory } from "./components/AddCategory"



export const GifExpertApp = () => {
  //nunca poner condicionalmente los hooks
  const [categories, setCategories] = useState( [ 'One Punch', 'Dragon Ball'] )
  
  const onAddCategory = ( event ) => {
    //console.log('onAddCategory')
    //setCategories( [...categories,  'new category'] )
    setCategories( [ 'new category', ...categories ] )

    //setCategories( cat => [ ...cat, 'new category' ] ); funciona igual
  }
   
  return (
    <>
        {/* título */}
        <h1>GifExpertApp</h1>
      
        {/* input */}
        <AddCategory setCategories= { setCategories } />

        {/* Listado de Gifs */}
        {/* <button onClick={ onAddCategory }>Agregar</button> */}
        <ol>
          { categories.map( category => {
              return <li key={category}> { category} </li>
          }) 
        }
          {/* <li>abc</li>
          <li>123</li>
          <li>xyz</li>
 */}
        </ol>
            {/* Gif item */}
    </>
  )
}
