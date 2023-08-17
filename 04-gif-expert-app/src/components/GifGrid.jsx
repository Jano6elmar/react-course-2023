import { GifItem } from "./GifItem";
import { useFetchGifs } from "../Hooks/useFetchGifs";




export const GifGrid = ({ category }) => {

  const { images,isLoading } = useFetchGifs( category );

  console.log({ isLoading})
  

    return (
      <>
        <h3> { category } </h3>
        {
          isLoading && ( <h2 >Cargando...</h2>)
        }
        {/* {
          isLoading
          ? (<h2 >Cargando...</h2>)
          : null
        }; */}
        <div className="card-grid">
          {
            images.map( (image) => (
              <GifItem 
                key={ image.id }
                { ...image } 
                /* title={ image.title }
                url={ image.url } */
                />
            ))
           }
          

        </div>
        
      </>
  )
}
