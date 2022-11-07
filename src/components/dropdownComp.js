import React, { useState } from "react";
import './dropdown.css';


const DropdownComp = ({data,updateSelectedVehicles}) => { //id,label has to be passed

  //updateSelectedVehicles is a set function for handling selected data.
  const options = data;


  // [{"name":"Donlon","distance":100,"key":1,"selected":true},
  // {"name":"Enchai","distance":200,"key":2,"selected":false},
  // {"name":"Jebing","distance":300,"key":3,"selected":false},
  // {"name":"Sapir","distance":400,"key":4,"selected":false},
  // {"name":"Lerbin","distance":500,"key":5,"selected":false},
  // {"name":"Pingasor","distance":600,"key":6,"selected":false}]

  const [value, setValue] = useState([]);
  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.currentTarget)
    console.log(event)
  };

  console.log(value)
  return (
    <div>
      <form>
      <label>
          Select Destination:
          <br />
        {options  && <select
          value={value.name}
          onChange={(e)=>handleChange(e)}
          >
          <option disabled selected >Select</option>
          {options.map((value) => (
            <option value={value.key} id={value.key} 
            key={value.key} disabled={value.selected}>
              {value.name}
            </option>
          ))}
        </select>}
        </label>
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