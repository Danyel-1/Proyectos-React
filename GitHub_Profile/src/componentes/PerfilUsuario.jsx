import React from 'react'

const PerfilUsuario = ({name, followers, following, location, avatar, bio}) => {


  return (
    <div className='perfil'>
      <section className='avatar'>
        <div className='imagen'>
          <img src={avatar} alt={name} />
        </div>
        <h1>{name}</h1>
        <p>{bio}</p>
      </section>

      <article>Followers | {followers}</article>
      <article>Following | {following}</article>
      <article>Location | {location ? location : " "}</article>
    </div>
  )
}

export default PerfilUsuario
