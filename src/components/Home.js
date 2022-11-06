import "./home.css";
import React, { useEffect, useState } from "react";
import DropdownComp from "./dropdownComp";
import RadioButtonComp from "./radioButtonComp";
import Header from "./header";
import axios from "axios";
import api from "./common/api";

const Home = () => {
  const [planets, setPlanets] = useState([]);
  const [planetsLoading, setPlanetsLoading] = useState(false);
  const [planetsError, setPlanetsError] = useState(false);

  const [vehicles, setVehicles] = useState([]);
  const [vehiclesLoading, setVehiclesLoading] = useState(false);
  const [vehiclesError, setVehiclesError] = useState(false);
  const [v1, setV1] = useState("");
  const [v2, setV2] = useState("");
  const [v3, setV3] = useState("");
  const [v4, setV4] = useState("");
// Declared globally (as in attached to window object or equivalent)
let myuniqueidcounter = 0;

function uniqueId() {
    myuniqueidcounter += 1
    return myuniqueidcounter;
}


// // Do this in the props change or whereever your data gets passed in
// let keyedData = data.map(value => Object.assign(value, { Id: uniqueId() });



  const getPlanets = async () => {
    setPlanetsLoading(true);
    try {
      let planets = await axios.get(api.getPlanetsUrl);
      myuniqueidcounter = 0;
      planets=planets.data;
      planets.map((pdata)=>{
        Object.assign(pdata, { key: uniqueId() })
      })    

      setPlanets(planets);
    } catch (err) {
      setPlanetsError(err.message || "unexpected error");
    } finally {
      setPlanetsLoading(false);
    }
  };

  const getVehicles = async () => {
    setVehiclesLoading(true);
    try {
      let vehicles = await axios.get(api.getvehiclesUrl);
      myuniqueidcounter = 0;
        vehicles=vehicles.data
        vehicles.map((vdata)=>{
          Object.assign(vdata, { key: uniqueId() })
        })    
  
      setVehicles(vehicles);
    } catch (err) {
      setVehiclesError(err.message || "unexpected error");
    } finally {
      setVehiclesLoading(false);
    }
  };

  useEffect(() => {
    getPlanets();
    getVehicles();
  }, []);

  // const [first, setFirst] = React.useState("");
  // const [sec, setSec] = React.useState("");

  // const [radioValues, setRadioValues] = React.useState([]);

  // React.useEffect(() => {
  //   const values = [];
  //   if (first.length) values[0] = first;
  //   if (sec.length) values[1] = sec;
  //   setRadioValues(values);
  // }, [first, sec]);

  
  const vData = (vehiclesData, rname, selectedVehicles) => {
    return (
      <div onChange={(e) => selectedVehicles(e.target.value)}>
        {vehiclesData.map((vd) => {
          return (
            <div>
              <label for={vd.key}>{vd.name} </label>
              <input type="radio"  name={rname} value={vd.name} />
            </div>
          );
        })}
      </div>
    );
  };

  console.log(v1, v2, v3, v4);
 

  return (
    <>
      <Header />
      <h1>Find Falcone!</h1>
      {planetsLoading && <p>planets Loading...</p>}
      {planetsError && <p>planetsError</p>}
      {planets && JSON.stringify(planets)}

      {vehiclesLoading && <p>vehicles Loading...</p>}
      {vehiclesError && <p>vehiclesError</p>}
      {vehicles && JSON.stringify(vehicles)}
{/* 
      <div onChange={(e) => setFirst(e.target.value)}>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
      </div>
      <br></br>
      <div onChange={(e) => setSec(e.target.value)}>
        <input type="radio" value="Sunny" name="weather" /> Sunny
        <input type="radio" value="Cloudy" name="weather" /> Cloudy
      </div>
      {JSON.stringify(radioValues)}
      {JSON.stringify(first)}
      {JSON.stringify(sec)} */}

      <div className="container">
        <div className="dropdown1">
          {planets && <DropdownComp data={planets} />}
          {vehicles && vData(vehicles,'d1', setV1)}
        </div>
        <div className="dropdown2">
          {planets && <DropdownComp data={planets} />}
          {vehicles && vData(vehicles,'d2', setV2)}
        </div>
        <div className="dropdown3">
          {planets && <DropdownComp data={planets} />}
          {vehicles && vData(vehicles,'d3', setV3)}
        </div>
        <div className="dropdown4">
          {planets && <DropdownComp data={planets} />}
          {vehicles && vData(vehicles,'d4', setV4)}
        </div>
      </div>
    </>
  );
};

export default Home;

// [SOLVED]-HOW TO HANDLE MULTIPLE RADIO BUTTONS AND THEIR VALUES - REACTJS-REACTJS
// https://www.appsloveworld.com/reactjs/200/584/how-to-handle-multiple-radio-buttons-and-their-values-reactjs
// https://www.developerway.com/posts/react-key-attribute