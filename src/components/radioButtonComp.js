import React from 'react'
import { useState } from 'react';

const RadioButtonComp = ({vehiclesData, radioBtnId, updateVehicles}) => {
  // console.log(vehiclesData)
  const [selectVehicle,setSelectVehicle]=useState('')
  const handleChange=(event)=>{
   
    let selectedVehicle=event.target.value;
    console.log(selectedVehicle)
    let filteredSelectedOption=vehiclesData.filter((vd)=>vd.name!==selectedVehicle)
    console.log(filteredSelectedOption)
    setSelectVehicle(selectedVehicle)
    updateVehicles(filteredSelectedOption,selectedVehicle,radioBtnId)
  }
  return (
    <div >
      {vehiclesData.map((vd) => {
        return (
          <div key={vd.key}>
            <label htmlFor={vd.key}>{vd.name} </label>
            <input type="radio"  name={radioBtnId}
             value={vd.name} 
            checked={selectVehicle === vd.name}
            onChange={handleChange}
            /> {vd.total_no}
          </div>
        );
      })}
    </div>
  );
};
// console.log(v1, v2, v3, v4);

export default RadioButtonComp;