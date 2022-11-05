import React from 'react'
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import RadioButtons from './radioButtons';

const RadioButtonComp = ({vehiclesData}) => {
  const vehiclesDataRadioButton = vehiclesData.map((vd)=>{
    console.log(vd);
    return (<RadioButton /> )

  })
  // {name: 'Space rocket', total_no: 1, max_distance: 300, speed: 4}
  const availableVehicles = () => {


  }

  return (
    // <div>{JSON.stringify(vehiclesData)}</div>
    <div><RadioButtons /></div>
  )
}

export default RadioButtonComp;