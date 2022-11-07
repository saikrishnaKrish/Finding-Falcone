import React from 'react'

const RadioButtonComp = ({vehiclesData, rname, selectedVehicles}) => {
  console.log(vehiclesData)
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
// console.log(v1, v2, v3, v4);

export default RadioButtonComp;