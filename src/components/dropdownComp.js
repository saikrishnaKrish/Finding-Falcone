import React, { useState } from "react";
import './dropdown.css';


const DropdownComp = ({data,updatePlanets,updateSelectedVehicles}) => { //id,label has to be passed

  //updateSelectedVehicles is a set function for handling selected data.
  const options= data ;

  // [{"name":"Donlon","distance":100,"key":1,"selected":true},
  // {"name":"Enchai","distance":200,"key":2,"selected":false},
  // {"name":"Jebing","distance":300,"key":3,"selected":false},
  // {"name":"Sapir","distance":400,"key":4,"selected":false},
  // {"name":"Lerbin","distance":500,"key":5,"selected":false},
  // {"name":"Pingasor","distance":600,"key":6,"selected":false}]

  const [value, setValue] = useState([]);
  const handleChange = (event) => {
    let selectedId=event.target.value;
    let filterdselectedOption=options.filter((opt)=>{return opt.key != selectedId});
    let fsO=options.filter((opt)=>{return opt.key == selectedId});
    updatePlanets(filterdselectedOption)
    console.log('target')
    console.log(event.target.value)
    setValue(fsO[0].name);


  };

  console.log(value)
  return (
    <div>
      <form>
      <label>  Select Destination:</label>
          <br />
        {options && <select onChange={handleChange} >
          <option defaultValue disabled  >Select</option>
          {options.map((val) => (
            <option value={val.key} id={val.key} 
            key={val.key} disabled={val.selected}>
              {val.name}
            </option>
          ))}
        </select>}
        
      </form>
      {value && <p>{value}</p>}
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