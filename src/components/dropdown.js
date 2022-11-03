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
}
export default Dropdown;