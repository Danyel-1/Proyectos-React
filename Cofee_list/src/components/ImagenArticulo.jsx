import React from 'react'

const ImagenArticulo = ({image, name, popular}) => {
  return (
    <div className="imagen-articulo">
        <img src={image} alt={name} />
        { popular && <p className='popular'>popular</p>}
    </div>
  )
}

export default ImagenArticulo
