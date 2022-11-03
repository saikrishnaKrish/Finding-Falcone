import React,{useState} from 'react'
import Select from 'react-dropdown-select';

const op = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];


const Dropdown = ({id,options=[{}]}) => {
  const example = options;
    console.log(example)
// const result = example ? example.toString() : '';

// console.log(result); // 👉️ ""
  console.log(options)
  console.log(op)
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange=(e)=>{
    setSelectedOption(e)
  }
  return (
    <Select
        id={id}
        defaultValue={'select'}
        onChange={(e)=>console.log(e)}
        options={example}
      />
    // <>
    // {JSON.stringify(options)}
    // </>
  )
}

export default Dropdown;