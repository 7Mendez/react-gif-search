import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

function GifExpertApp() {
  // const list = ['The Big Bang Theory', 'Game of Thrones', 'The Good Doctor', 'SuperStore', 'The Office']
  const [categories, setCategories] = useState(['The Big Bang Theory'])

  const removeCategory = (index) => {
    const temp = [...categories.slice(0,index), ...categories.slice(index+1)]
    setCategories(temp);
  }

  return ( 
    <>
      <h2>Gif Search App</h2>
      <AddCategory setCategories={setCategories}></AddCategory>
      <hr/>
      {
        categories.map( (category, index) => (
          <div key={`category-${index}`} className="flex-between al-base">  
            <GifGrid key={`grid-${category}`} category={category}></GifGrid>
            <button className="ml-1" onClick={() => removeCategory(index)}>x</button> 
         </div>
        ))
      }
    </>
   );
}

export default GifExpertApp;

// Notas
// en los métedos de los call back se llama por () => something
// siempre tener cuidado en los scopes.