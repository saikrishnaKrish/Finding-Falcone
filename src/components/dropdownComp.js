import React, { useState } from "react";
import './dropdown.css';


const DropdownComp = ({data}) => { //id,label has to be passed

  const options = data
  const [value, setValue] = useState([]);
  const handleChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <div>
      <form>
      <label>
          Pick your favorite flavor:
          <br />
        {options  && <select
          value={value.name}
          onChange={handleChange}
          >
          <option disabled selected >Select</option>
          {options.map((value) => (
            <option value={value.name} id={value.key} key={value.key}>
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