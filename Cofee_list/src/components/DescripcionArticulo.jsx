import React from 'react'

const DescripcionArticulo = ({price, rating, votes, available, name}) => {
  return (
    <div className='descripcion-articulo'>
        <h3>{name}</h3>
        <p className='precio'>{price}</p>

        {rating ? (<figcaption>
          <h4>⭐<strong>{rating}</strong></h4>
          <p>({votes} votes)</p>
        </figcaption>) :
         (<figcaption><p>☆ No ratings</p></figcaption>)}

        {/*<p>{rating || "No Rating"}</p>
        <p>{votes}</p>*/}
        {available || <p className='available'>Sold out</p>}
      </div>
  )
}

export default DescripcionArticulo
