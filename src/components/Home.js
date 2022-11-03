import './home.css';
import React, { useEffect, useState } from 'react'
import Dropdown from './dropdown'
import Header from './header'
import axios from 'axios'
import api from './common/api'

const Home = () => {

  const [planets,setPlanets]=useState([]);
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


  return (    <>
    <Header/>
    <div>Home component</div>
      <h1>Planets</h1>
      {planetsLoading && <p>planets Loading</p>}
      {planetsError && <p>planetsError</p>}
      {planets && JSON.stringify(planets)}

      <div className='container'>
        <div className='dropdown1'>
          <Dropdown />
        </div>
        <div className='dropdown2'>
          <Dropdown />
        </div>
        <div className='dropdown3'>
          <Dropdown />
        </div>
        <div className='dropdown4'>
          <Dropdown />
        </div>
      </div>
    </>
  )
}

export default Home