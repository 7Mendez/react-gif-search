export const RemoveCategory = ({ setCategories, index }) => {
  const removeCategory = (index) => {
    setCategories(categories => [...categories.slice(0,index), ...categories.slice(index+1)]); 
  }

  return (
    <button className="ml-1" onClick={ () => removeCategory(index)} >X</button>
  )
}