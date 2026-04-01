import React, { useState } from 'react'
//import { useFetch } from '../hooks/useFetch';

const nombre = '';

const Buscador = ({DetallesInfo}) => {
    const [userName, setUserName] = useState(nombre);

    const handleChange = (e) =>{
        setUserName(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        DetallesInfo(userName);
    }


  return (
    <section className='buscador'>
        <button onClick={handleSubmit}>🔍</button>
        <input type="text" name='name' placeholder='username' autoComplete='off' onChange={handleChange} value={userName}/>
    </section>
  );
}

export default Buscador;
