import React, { useEffect, useState } from 'react'
import TarjetaRepost from './TarjetaRepost';

const Repositorios = ({repositorios}) => {
  const [repos, setRepos] = useState([]);
  const [visble, setVisible] = useState(false);

  useEffect(()=>{
        fetch(repositorios)
          .then((response) => response.json())
          .then((data) => {
            setRepos(data);
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
        });
    },[repositorios]);

    const cuatroInicial = (repos) => {
      let present = [];
      let iteracion = repos.length < 4 ? repos.length : 4;

      for (let i = 0; i < iteracion; i++) {
        present[i] = <TarjetaRepost key={repos[i].id} el={repos[i]}/>
      }
      return present;
    }

    const handleShow = () =>{
      return setVisible(!visble);
    }

  return (
    <>
      <div className='repositorios-grid'>
        {repos.length > 1 ? 
        ( visble ? repos.map((el) => <TarjetaRepost id={el.id} el={el}/>) : cuatroInicial(repos) ): 
        <p className='centro'>Sin repositorios</p>} 
      </div>

        {!visble && repos.length >= 4 ? <p className='botonMas' onClick={handleShow}>View all repositories</p> : ""}
    </>
  )
}

export default Repositorios
