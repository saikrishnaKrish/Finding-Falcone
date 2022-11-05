import React from 'react'
import { RadioGroup, RadioButton } from 'react-radio-buttons';

const RadioButtons = () => {
    const [selectVehicle, setSelectVehicle] = React.useState('dog');
  
    const handleVehiclesChange = (e) => {
        console.log(e);
        
        setSelectVehicle();
    };
 
    return (
      <div>
         <RadioGroup onChange={ handleVehiclesChange }>
          <RadioButton value="apple">
            Apple
          </RadioButton>
          <RadioButton value="orange">
            Orange
          </RadioButton>
         
        </RadioGroup>
      </div>
    );
  };

export default RadioButtons;