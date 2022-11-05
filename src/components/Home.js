import './home.css';
import React, { useEffect, useState } from 'react'
import DropdownComp from './dropdownComp'
import RadioButtonComp from './radioButtonComp';
import Header from './header'
import axios from 'axios'
import api from './common/api'

const Home = () => {

  const [planets,setPlanets]=useState([]);
  const [planetsLoading,setPlanetsLoading]=useState(false);
  const [planetsError,setPlanetsError]=useState(false);

  const [vehicles, setVehicles] = useState([]);
  const [vehiclesLoading, setVehiclesLoading] = useState(false);
  const [vehiclesError, setVehiclesError] = useState(false);


  
  const getPlanets=async ()=>{

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

  const getVehicles=async ()=>{

    setVehiclesLoading(true);
    try{
        let vehicles=await axios.get(api.getvehiclesUrl)
      
        setVehicles(vehicles.data)
    }
    catch(err){
      setVehiclesError(err.message||'unexpected error')
    }
    finally{
      setVehiclesLoading(false);
    }
  }
  useEffect(()=>{
    getPlanets();
    getVehicles();
    
  },[])


  return ( <>
    <Header/>
      <h1>Find Falcone!</h1>
      {planetsLoading && <p>planets Loading...</p>}
      {planetsError && <p>planetsError</p>}
      {planets && JSON.stringify(planets)}

      {vehiclesLoading && <p>vehicles Loading...</p>}
      {vehiclesError && <p>vehiclesError</p>}
      {vehicles && JSON.stringify(vehicles)}

      <div className='container'>
        <div className='dropdown1'>
         {planets &&  <DropdownComp data={planets}/>}
         {vehicles && <RadioButtonComp vehiclesData={vehicles} />}
        </div>
        <div className='dropdown2'>
        {planets &&  <DropdownComp data={planets}/>}
        {vehicles && <RadioButtonComp vehiclesData={vehicles} />}
        </div>
        <div className='dropdown3'>
        {planets &&  <DropdownComp data={planets}/>}
        {vehicles && <RadioButtonComp vehiclesData={vehicles} />}
        </div>
        <div className='dropdown4'>
        {planets &&  <DropdownComp data={planets}/>}
        {vehicles && <RadioButtonComp vehiclesData={vehicles} />}
        </div>
      </div>
    </>
  )
}

export default Home