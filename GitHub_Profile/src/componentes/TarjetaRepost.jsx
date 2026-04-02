import React from 'react'
/**
 * let aux = {
              name: data.name,
              description: data.description,
              forks: data.forks,
              stars:data.stargazers_count,
              updated:data.updated_at
            }
 */
const TarjetaRepost = ({el}) => {

  const formatoFecha = (fecha)=>{
    let ultimaVez = new Date(fecha).getTime(),
    actual = new Date().getTime(),
    total = actual - ultimaVez;
    
    if(total > 31104000000){
      return Math.floor(total / 31104000000) + (total < 62208000000 ? " year" : " years")
    }else if (total > 2592000000) {
      return Math.floor( total / 2592000000) + (total < 5184000000 ? " month" : " months") ;
    }else{
      return  Math.floor(total / (1000 * 60 * 60 * 24)) + (total < 86400000 ? " day" : " days") ;
    }
    
  }
    
  return (
    <a href={el.html_url} target='_blank' className='tarjeta'>
      <h4>{el.name}</h4>
      <p>{el.description}</p>
      <div className="meta">
        {el.license && <p><img src="/src/assets/MIT.svg" alt="MIT" />{el.license.key.toUpperCase()}</p>}
        <p><img src="/src/assets/fork.svg" alt="Fork" />{el.forks}</p>
        <p><img src="/src/assets/stars.svg" alt="Stars" />{el.stargazers_count}</p>

        <p>updated {formatoFecha(el.updated_at)} ago</p>
      </div>
    </a>
  )
}

export default TarjetaRepost
