import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "./hooks/useFetchGifs";


export const GifGrid = ({ category }) => {
  const { data:images, message } = useFetchGifs(category);

  return (
    <>  
      <details className="width-full" open={true}>
        <summary className="animate__animated animate__flash">{category}</summary>

        { message.length >= 1 && <code className="animate__animated animate__heartBeat">{ message }</code> }

        {
          images.map((img, index) => (
            <GifGridItem key={`img${index}`} {...img} />
            )
          )
        }
      </details>
    </>
  )
}
