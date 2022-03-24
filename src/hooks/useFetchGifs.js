import { useEffect, useState, } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true, 
    message: "Cargando..."
  });


  const textMessage = (error, imagesCount) => {
    if(error === true){
      return '¡Ups! Hubo un problema al cargar';
    } else if( imagesCount < 1 ){
      return '¡Ups! No se encontraron resultados';
    } else {
      return '';
    }
  }

  useEffect(() => {
    getGifs(category)
      .then((images) => {
        setTimeout(() => {
          setState({
            data: images,
            loading: false,
            message: textMessage(false, images.length)
          });
        }, 3000)})
      .catch(() => {
        setState({
          data: [],
          loading: false,
          message: textMessage(true, 0)
        });
      });
  }, [category])

  return state;
}
