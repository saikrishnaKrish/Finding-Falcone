import React, { useState } from "react";
import './dropdown.css';


const DropdownComp = ({ data, updatePlanets }) => { //id,label has to be passed

  //updateSelectedVehicles is a set function for handling selected data.
  const options = data;

  // [{"name":"Donlon","distance":100,"key":1,"selected":true},
  // {"name":"Enchai","distance":200,"key":2,"selected":false},
  // {"name":"Jebing","distance":300,"key":3,"selected":false},
  // {"name":"Sapir","distance":400,"key":4,"selected":false},
  // {"name":"Lerbin","distance":500,"key":5,"selected":false},
  // {"name":"Pingasor","distance":600,"key":6,"selected":false}]

  const [selectedPlanet, setselectedPlanet] = useState(['select']);
  
  const handleChange = (event) => {
    event.preventDefault();
    let selectedId=event.target.value;
    let filterdselectedOption=options.filter((opt)=>{return opt.name != selectedId});
    updatePlanets(filterdselectedOption,selectedId)
    setselectedPlanet(selectedId);

  };

  // console.log(selectedPlanet)
  return (
    <div>
      <form>
        <label>Select Destination:</label>
        <br />
        {options && <select value={selectedPlanet} onChange={handleChange} >
          <option disabled >{selectedPlanet}</option>
          {options.map((val) => (
            <option value={val.name} id={val.key} 
              key={val.key} disabled={val.selected}>
              {val.name}
            </option>
          ))
          }
        </select>} 

      </form>
      {selectedPlanet && <p>{selectedPlanet}</p>}
    </div>
  );

  // =======
  // import React,{useState} from 'react'
  // import Select from 'react-dropdown-select';

  // const op = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' },
  // ];


  // const Dropdown = ({id,options=[{}]}) => {
  //   const example = options;
  //     console.log(example)
  // // const result = example ? example.toString() : '';

  // // console.log(result); // 👉️ ""
  //   console.log(options)
  //   console.log(op)
  //   const [selectedOption, setSelectedOption] = useState(null);
  //   const handleChange=(e)=>{
  //     setSelectedOption(e)
  //   }
  //   return (
  //     <Select
  //         id={id}
  //         defaultValue={'select'}
  //         onChange={(e)=>console.log(e)}
  //         options={example}
  //       />
  //     // <>
  //     // {JSON.stringify(options)}
  //     // </>
  //   )
  // >>>>>>> ecad6b0bf42a8dafb6b516a466b01f2536d1993f
}
export default DropdownComp;


// https://askavy.com/react-select/