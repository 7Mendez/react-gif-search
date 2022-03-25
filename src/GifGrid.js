import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "./hooks/useFetchGifs";
import { RemoveCategory } from "./RemoveCategory";


export const GifGrid = ({ category, index, setCategories }) => {
  const { data:images, message } = useFetchGifs(category);

  return (
    <div className="flex-between al-base">  
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

      <RemoveCategory setCategories={setCategories} index={index} ></RemoveCategory>
    </div>
  )
}                

