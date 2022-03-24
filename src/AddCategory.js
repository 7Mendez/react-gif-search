import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //console.log('Submit Hecho');
    if (inputValue.length > 1) {
      setCategories(categories => [ inputValue, ...categories,]); // call to before data
      setInputValue('');
    } else {
      setInputValue('');
    }
  }

  const clearCategories = () => {
    setCategories(categories => [])
  }

  return (
    <form onSubmit={ handleSubmit }>
      <div className="search-gifs">
      <input 
        type="search"
        value={inputValue}
        placeholder="Type something here!"
        onChange={ (e) => handleInputChange(e)} />
        <button onClick={ clearCategories } type="Reset">Clear Categories</button>
      </div>
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}
