import React, { useState } from "react";
import './dropdown.css';
const Dropdown = () => {
  const options = ["Select", "DonLon", "Enchai", "Jebing", "Sapir", "Lerbin", "Pingasor"];
  const [value, setValue] = useState("Select");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <form>
        <select
          value={value}
          onChange={handleChange}>
          {options.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      </form>
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
export default Dropdown;