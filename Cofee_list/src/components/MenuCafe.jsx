import React, {useState} from 'react'
import {useFetch} from '../hooks/useFetch.jsx'
import Cafe from './Cafe.jsx';

const MenuCafe = () => {
    const [cofeeData, setCofeeData] = useState([]);
    const [activeAll, setActiveAll] = useState(true);
    const [activeAva, setActiveAva] = useState(false);
    const url = 'https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json';

    const {data, error, loading} = useFetch(url);

    if (!data) return null;  

    
    if (error) {
        console.log(error);
        
        return(
        <p className='cofee-list'>
            Error
        </p>  
        );
    }

    const AllProducts = ()=>{
        setCofeeData(data);

        setActiveAll(true);
        setActiveAva(false);
    }

    const Available = ()=>{
        let aux = [];
        data.forEach(ele => {
            if (ele.available) {
                aux.push(ele);
            }
        });
        setCofeeData(aux);

        setActiveAll(false);
        setActiveAva(true);
    }

  return (

    <div className='cofee-list'>
        <section className='head'>
            <h1>Our Collection</h1>
            <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        </section>

        <nav className="botones">
            <button className={activeAll ? 'boton-activo': ''} onClick={AllProducts}>All Products</button>
            <button className={activeAva ? 'boton-activo': ''} onClick={Available}>Available Now</button>
        </nav>

        <section className='grid-listado'>
            {cofeeData.length === 0 ? data.length > 0 ? (data.map((el)=><Cafe key={el.id} el={el}/>)) : <p>Sin datos</p> : (cofeeData.map((el)=><Cafe key={el.id} el={el}/>))} 
        </section>

        {/**<section className="grid-listado">
         {cofeeData.length > 0 ? (cofeeData.map((el)=><Cafe key={el.id} el={el}/>)) : <p>Sin datos</p>}
        </section> */}
    </div>
  )
}

export default MenuCafe
