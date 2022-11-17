import React from 'react'
import { useState } from 'react';

const RadioButtonComp = ({vehiclesData, rname, updateVehicles}) => {
  // console.log(vehiclesData)
  const [selectVehicle,setSelectVehicle]=useState('')
  const handleChange=(event)=>{
    event.preventDefault();
    let selectedVehicle=event.target.value;
    let filteredSelectedOption=vehiclesData.filter((vd)=>vd.name!=selectedVehicle)
    console.log(filteredSelectedOption)
    setSelectVehicle(selectedVehicle)
    updateVehicles(filteredSelectedOption,selectedVehicle)
  }
  return (
    <div onChange={(e) => handleChange(e)}>
      {vehiclesData.map((vd) => {
        return (
          <div key={vd.key}>
            <label for={vd.key}>{vd.name} </label>
            <input type="radio"  name={rname} value={vd.name} />
          </div>
        );
      })}
    </div>
  );
};
// console.log(v1, v2, v3, v4);

export default RadioButtonComp;