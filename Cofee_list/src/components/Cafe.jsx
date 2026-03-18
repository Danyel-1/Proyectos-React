import React from 'react'
import ImagenArticulo from './imagenArticulo'
import DescripcionArticulo from './DescripcionArticulo'

const Cafe = ({el}) => {
  const {available, image, name, popular, price, rating, votes} = el 

  return (
    <article>
      
      <ImagenArticulo image={image} name={name} popular={popular}/>

      <DescripcionArticulo available={available} price={price} rating={rating} name={name} votes={votes}/>
    </article>
  )
}

export default Cafe
