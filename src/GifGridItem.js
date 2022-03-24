export const GifGridItem = ({ title, url }) => {
  return (
    <figure>
      <img alt={ title } src={ url} className="responsive animate__animated animate__flipInY" />
      <figcaption>{ title }</figcaption>
    </figure>
  )
}