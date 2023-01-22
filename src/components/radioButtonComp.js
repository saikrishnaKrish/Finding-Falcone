import React from 'react'
import { useState } from 'react';

const RadioButtonComp = ({vehiclesData, radioBtnId, updateVehicles}) => {
  // console.log(vehiclesData)
  const [selectVehicle,setSelectVehicle]=useState('')
  const handleChange=(event)=>{
   
    let selectedVehicle=event.target.value;
    // console.log(selectedVehicle)
    let filteredSelectedOption=vehiclesData.filter((vd)=>vd.name===selectedVehicle)[0]
    // let selectedKey=filteredSelectedOption.key;
 
    // if(filteredSelectedOption.total_no>0){
    //   filteredSelectedOption.total_no=filteredSelectedOption.total_no-1;
    // }else{
    //   filteredSelectedOption.selectVehicle=true
    // }
    // console.log('filetederd sekectio ',filteredSelectedOption)
    // let obj=vehiclesData;
    // obj[selectedKey]=filteredSelectedOption
  
    // let selectedVehicleDetailes=vehiclesData.filter((vd)=>vd.name===selectedVehicle)
    // console.log(filteredSelectedOption)

  setSelectVehicle(selectedVehicle);

    updateVehicles(filteredSelectedOption,radioBtnId)
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
            disabled={true ===vd.selected}
            onChange={handleChange}
            /> {vd.total_no} {' '} {JSON.stringify(vd.selected)}
          </div>
        );
      })}
    </div>
  );
};
// console.log(v1, v2, v3, v4);

export default RadioButtonComp;