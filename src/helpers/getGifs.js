export const getGifs = async ( category ) => {
  try {
    const apiKey = 'wKPJUdY5EKPc7WzKAEV3mDBVL1RLR5XE';
    const queryUrl = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${apiKey}`;
    const response = await fetch(queryUrl);
    const { data } = await response.json();

    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
  });
  
  return gifs;

  } catch {
    return []
  }

  // Esto regresa una promesa
}
