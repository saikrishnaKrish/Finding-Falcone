import "./home.css";
import React, { useEffect, useState } from "react";
import DropdownComp from "./dropdownComp";
import Header from "./header";
import axios from "axios";
import api from "./common/api";
import RadioButtonComp from "./radioButtonComp";

const Home = () => {
  //handling planets api call
  const [planets, setPlanets] = useState([]);
  const [planetsLoading, setPlanetsLoading] = useState(false);
  const [planetsError, setPlanetsError] = useState(false);

  //handling vehicles api call
  const [vehicles, setVehicles] = useState([]);
  const [vehiclesLoading, setVehiclesLoading] = useState(false);
  const [vehiclesError, setVehiclesError] = useState(false);

  //function for handling Selected Planets
  //Two variables of selected vehicles and selected planets
  const [selectedPlanets, setSelectedPlanets] = useState({});//for handling dropdown
  //function for handling Selected Vehicles
  const [selectedVehicles, setSelectedVehicles] = useState(new Set());//for handling radio button



  // Declared globally (as in attached to window object or equivalent)
  //generating Unique id
  let myuniqueidcounter = 0;
  function uniqueId() {
    myuniqueidcounter += 1
    return myuniqueidcounter;
  }


  // // Do this in the props change or whereever your data gets passed in
  // let keyedData = data.map(value => Object.assign(value, { Id: uniqueId() });

  //handling Planets Api Data
  const getPlanets = async () => {
    setPlanetsLoading(true);
    try {
      let planets = await axios.get(api.getPlanetsUrl);
      myuniqueidcounter = 0;
      planets = planets.data;
      planets.map((pdata) => {
        Object.assign(pdata, { key: uniqueId(), selected: false })
      })

      setPlanets(planets);
    } catch (err) {
      setPlanetsError(err.message || "unexpected error");
    } finally {
      setPlanetsLoading(false);
    }
  };

  //handling Vehicels Api Data
  const getVehicles = async () => {
    setVehiclesLoading(true);
    try {
      let vehicles = await axios.get(api.getvehiclesUrl);
      myuniqueidcounter = 0;
      vehicles = vehicles.data
      vehicles.map((vdata) => {
        Object.assign(vdata, { key: uniqueId(), selected: false })
      })

      setVehicles(vehicles);
    } catch (err) {
      setVehiclesError(err.message || "unexpected error");
    } finally {
      setVehiclesLoading(false);
    }
  };

  //calling Api Calls
  useEffect(() => {
    getPlanets();
    getVehicles();
  }, []);

  const updateSelectedPlanetsData = (data, selectedOption,dropdownId) => {
    // console.log('seleceted planet')
    // console.log(selectedOption)
    // console.log(dropdownId)
    setPlanets(data)// to update the planets data
    let obj=selectedPlanets;
    obj[dropdownId]=selectedOption[0]
    // {dropdownId:selectedOption[0]}
    setSelectedPlanets(obj)
    // setSelectedPlanets((selected)=>({...selected,obj}))
    // if (!selectedPlanets.has(selectedId)) {
    //   let obj=selectedPlanets;
    //   obj.add(selectedId);
    //   setSelectedPlanets(obj);
    // }
    console.log(selectedPlanets)
  }

  const updateSelectedVehiclesData = (data, selectedId) => {
    // console.log('selected vehicles')
    // console.log(data, selectedId)
    // setVehicles(data); // to update vehicles data
    if(!selectedVehicles.has(selectedId)){
     let obj=selectedVehicles;
     obj.add(selectedId)
      setSelectedVehicles(obj);
    }
  }

  return (
    <>
      <Header />
      <h1>Find Falcone!</h1>
      <br />
      {planetsLoading && <p>planets Loading...</p>}
      {planetsError && <p>planetsError</p>}
      {planets && JSON.stringify(planets)}
      <br />
      <br />
      {vehiclesLoading && <p>vehicles Loading...</p>}
      {vehiclesError && <p>vehiclesError</p>}
      {vehicles && JSON.stringify(vehicles)}
      <br />
      {/* {selectedVehicles && <p>{JSON.stringify()}</p>}
      {selectedPlanets && <p>{JSON.stringify()}</p>}
      <br /> */}
      <br />
      {JSON.stringify(selectedPlanets)}
      <br/>
      <div className="container">
        <div className="dropdown1">
          {planets && <DropdownComp data={planets}
            dropdownId={1}
            updatePlanets={updateSelectedPlanetsData} //passing updater function for updating planets
          />}
          {vehicles && <RadioButtonComp
            vehiclesData={vehicles} rname={'d1'}
            updateVehicles={updateSelectedVehiclesData} />}
        </div>
        <div className="dropdown2">
          {planets && <DropdownComp data={planets}
            dropdownId={2}
            updatePlanets={updateSelectedPlanetsData} //passing updater function for updating planets
          />}
          {vehicles && <RadioButtonComp
            vehiclesData={vehicles} rname={'d2'}
            updateVehicles={updateSelectedVehiclesData} />}
        </div>
        <div className="dropdown3">
          {planets && <DropdownComp data={planets}
            dropdownId={3}
            updatePlanets={updateSelectedPlanetsData} //passing updater function for updating planets
          />}
          {vehicles && <RadioButtonComp
            vehiclesData={vehicles}
            rname={'d3'}
            updateVehicles={updateSelectedVehiclesData} />}
        </div>
        <div className="dropdown4">
          {planets && <DropdownComp
            dropdownId={4}
            data={planets} //passing planets Data
            updatePlanets={updateSelectedPlanetsData} //passing updater function for updating planets
          />}
          {vehicles && <RadioButtonComp vehiclesData={vehicles}
            rname={'d4'} 
            updateVehicles={updateSelectedVehiclesData} />}
        </div>
      </div>

    </>
  );
};

export default Home;

// [SOLVED]-HOW TO HANDLE MULTIPLE RADIO BUTTONS AND THEIR VALUES - REACTJS-REACTJS
// https://www.appsloveworld.com/reactjs/200/584/how-to-handle-multiple-radio-buttons-and-their-values-reactjs
// https://www.developerway.com/posts/react-key-attribute