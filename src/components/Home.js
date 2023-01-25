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
  const [selectedVehicles, setSelectedVehicles] = useState({});//for handling radio button

  const [findFalcone,SetfindFalcone]=useState('')


 useEffect(()=>{

 if( Object.keys(selectedVehicles).length===3 && Object.keys(selectedPlanets).length===3){
  SetfindFalcone('disabled')
  console.log(true)
 }  
 },[selectedVehicles,selectedPlanets]);

 
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
      planets.map((pdata) => Object.assign(pdata, { key: uniqueId(), selected: false })
      )
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
    console.log('seleceted planet',data)
    // console.log(selectedOption)
    // console.log(dropdownId)
    // to update the planets data
    let obj=selectedPlanets;
    if(obj[dropdownId] === undefined || obj[dropdownId].key===selectedOption[0].key){
      obj[dropdownId]=selectedOption[0]  
      setSelectedPlanets(obj);
      setPlanets(data)
      console.log('first selection')
    }
    else{
      let existingValue=obj[dropdownId]; //existing value
      // let planets=data;
      obj[dropdownId]=selectedOption[0]  
      setSelectedPlanets(obj);
      console.log('check',obj[dropdownId].key===selectedOption.key)
      console.log('second selection',data) 
      // data.push(existingValue)
      // setPlanets(planets)
      // console.log('existingValue',existingValue)
      // planets.filter((p)=>p.key!=existingValue.key)
      console.log('planets',planets)
      console.log('existing option',existingValue)
      let updateplanets=[...data,existingValue]
      console.log('updated plents',updateplanets)
      setPlanets(updateplanets)
      // setPlanets((planetsData)=>[...planetsData,existingValue])      
    }

    // obj[dropdownId]=selectedOption[0]
    // {dropdownId:selectedOption[0]}
    // setSelectedPlanets((selected)=>({...selected,obj}))
    // if (!selectedPlanets.has(selectedId)) {
    //   let obj=selectedPlanets;
    //   obj.add(selectedId);
    //   setSelectedPlanets(obj);
    // }
    // console.log(selectedPlanets)
  }

  const updateSelectedVehiclesData = (selectedVehicle,radioBtnId) => {
    
    console.log(selectedVehicle)
  
    // selectedVehicle.total_no=selectedVehicle.total_no-1;
    // console.log(selectedVehicle)
    let selecetedKey=selectedVehicle.key

    //for updating the value of vehicles count
    //picking upvalue and increment it.
    let up_obj = vehicles.map(obj => {
      if (obj.key === selecetedKey && obj.total_no>0) {
       obj.total_no=obj.total_no-1;
      } 
      if (obj.key === selecetedKey && obj.total_no===0) {
       obj.selected=true;
      }
      return obj;
     })
    let selected_obj=selectedVehicles;

    if( selected_obj[radioBtnId]===undefined){
      selected_obj[radioBtnId]=selectedVehicle
      setVehicles(up_obj)
    }else{
      let curr_obj= selected_obj[radioBtnId].key; 
      
      let dec_obj=vehicles.map(obj=>{
        if(obj.key === curr_obj){
          obj.total_no++
          obj.selected===true?obj.selected=false:obj.selected=false;
        }
        return obj
      })

      selected_obj[radioBtnId]=selectedVehicle
      setVehicles(dec_obj)
    }


     console.log(selected_obj)
     console.log(selectedVehicle)
     setSelectedVehicles(selected_obj)
 




    // if(selectedVehicle.total_no>0){
    //   selectedVehicle.total_no=selectedVehicle.total_no-1;
    // }else{
    //   selectedVehicle.selectVehicle=true
    // }
    // console.log('filetederd sekectio ',selectedVehicle)
    // let obj=vehicles;
    // console.log('before obj',obj[selectedKey])
    // obj[selectedKey]=selectedVehicle
    // console.log('final obj',obj[selectedKey])
    // setVehicles(obj)
    // setSelectedVehicles((v)=>[...v,selectedVehicle])
  }

  return (
    <div id="main">
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
    selected Planets : {JSON.stringify(selectedPlanets)}
    <br/>
    <br/>
    selected Vehicles:{JSON.stringify(selectedVehicles)}

    <br/>
    <br/>
    selectedPlanetsLength : { Object.keys(selectedPlanets).length }
    <br/>
    <br/>
    selectedVehiclesLength : {Object.keys(selectedVehicles).length }

      <br/>
      <div className="container">
        <div className="dropdown1">
          {planets && <DropdownComp data={planets}
            dropdownId={1}
            updatePlanets={updateSelectedPlanetsData} //passing updater function for updating planets
          />}
          {vehicles && <RadioButtonComp
            vehiclesData={vehicles} radioBtnId={'d1'}
            updateVehicles={updateSelectedVehiclesData} />}
        </div>
        <div className="dropdown2">
          {planets && <DropdownComp data={planets}
            dropdownId={2}
            updatePlanets={updateSelectedPlanetsData} //passing updater function for updating planets
          />}
          {vehicles && <RadioButtonComp
            vehiclesData={vehicles} radioBtnId={'d2'}
            updateVehicles={updateSelectedVehiclesData} />}
        </div>
        <div className="dropdown3">
          {planets && <DropdownComp data={planets}
            dropdownId={3}
            updatePlanets={updateSelectedPlanetsData} //passing updater function for updating planets
          />}
          {vehicles && <RadioButtonComp
            vehiclesData={vehicles}
            radioBtnId={'d3'}
            updateVehicles={updateSelectedVehiclesData} />}
        </div>
        <div className="dropdown4">
          {planets && <DropdownComp
            dropdownId={4}
            data={planets} //passing planets Data
            updatePlanets={updateSelectedPlanetsData} //passing updater function for updating planets
          />}
          {vehicles && <RadioButtonComp vehiclesData={vehicles}
            radioBtnId={'d4'} 
            updateVehicles={updateSelectedVehiclesData} />}
        </div>
      </div>



<div>
{/* {selectedVehicles && selectedVehicles.map(v=><div>{selectedVehicles.name}</div>)} */}

<button disabled={findFalcone ? false : true} onClick={()=>{alert('clicked!!!')}}> Find Falcone </button>

</div>
    </div>
  );
};

export default Home;

// [SOLVED]-HOW TO HANDLE MULTIPLE RADIO BUTTONS AND THEIR VALUES - REACTJS-REACTJS
// https://www.appsloveworld.com/reactjs/200/584/how-to-handle-multiple-radio-buttons-and-their-values-reactjs
// https://www.developerway.com/posts/react-key-attribute