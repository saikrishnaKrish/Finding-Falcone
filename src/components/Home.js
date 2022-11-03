import React, { useEffect, useState } from 'react'
import Dropdown from './dropdown'
import Header from './header'
import axios from 'axios'
import api from './common/api'

const Home = () => {

  const [planets,setPlanets]=useState([
    {
        "name": "Donlon",
        "distance": 100
    },
    {
        "name": "Enchai",
        "distance": 200
    },
    {
        "name": "Jebing",
        "distance": 300
    },
    {
        "name": "Sapir",
        "distance": 400
    },
    {
        "name": "Lerbin",
        "distance": 500
    },
    {
        "name": "Pingasor",
        "distance": 600
    }
]);
  const [planetsLoading,setPlanetsLoading]=useState(false);
  const [planetsError,setPlanetsError]=useState(false);
  
  const getPlanets=async ()=>{
    const planetsData=null;
    setPlanetsLoading(true);
    try{
        let planets=await axios.get(api.getPlanetsUrl)
      
        setPlanets(planets.data)
    }
    catch(err){
      setPlanetsError(err.message||'unexpected error')
    }
    finally{
      setPlanetsLoading(false);
    }
  }
  // useEffect(()=>{
  //   getPlanets()
    
  // },[])


  return (
    <>
    <Header/>
    <div>Home component</div>
      <h1>Planets</h1>
      {planetsLoading && <p>planets Loading</p>}
      {planetsError && <p>planetsError</p>}
      {planets && JSON.stringify(planets)}

    <div className='container'>
      <div className='d1'>
      <Dropdown id={1} options={planets}/>
      </div>
      <div className='d2'>
      <Dropdown id={2} options={planets}/>
      </div>
      <div className='d3'>
      <Dropdown id={3} options={planets}/>

      </div>
      <div className='d4'>
      <Dropdown id={4} options={planets}/>

      </div>
    </div>
    </>
  )
}

export default Home