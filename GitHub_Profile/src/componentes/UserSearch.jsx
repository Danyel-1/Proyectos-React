import React, {  useEffect, useState } from 'react'
import Buscador from './Buscador';
import PerfilUsuario from './PerfilUsuario';
import Repositorios from './Repositorios';


const UserSearch = () => {
  const [url, setUrl] = useState('');
  const [profile, setProfile] = useState({});
  const [error, setError] = useState();
  
  useEffect(()=>{
    if (url.length > 0) {
      fetch(`https://api.github.com/users/${url}`)
        .then((response) => response.json())
        .then((data) => {
          let aux = {
            name : data.name,
            followers : data.followers,
            following : data.following,
            location : data.location,
            avatar: data.avatar_url,
            repos: data.repos_url,
            bio: data.bio
          }
          //console.log(data);
          setProfile(aux);
        })
        .catch((error) => {
          console.log(error);
          setError(error)
          setProfile({});
      });
    }
  }, [url]);

  const DetallesInfo = (user)=>{
    setUrl(user)
  }
  
  
  return (
    <main>
      <Buscador DetallesInfo={DetallesInfo}/>

      {profile.name ? <PerfilUsuario name={profile.name} followers={profile.followers} following={profile.following} location={profile.location} avatar={profile.avatar} bio={profile.bio}/> : ""
      }
        
      {profile.repos && <Repositorios repositorios={profile.repos}/>}
      
    </main>
  )
}

export default UserSearch
