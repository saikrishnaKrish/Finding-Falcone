import React from 'react'

const RadioPrac = () => {
    const [first, setFirst] = React.useState("");
    const [sec, setSec] = React.useState("");
    const [radioValues, setRadioValues] = React.useState([]);

    React.useEffect(() => {
        const values = [];
        if(first.length) values[0] = first;
        if(sec.length) values[1] = sec;
        setRadioValues(values);
    }, [first, sec]);
  return (
    <div className="App">
        <div onChange={(e) => setFirst(e.target.value)}>
            <input type="radio" value="Male" name="gender" /> Male
            <input type="radio" value="Female" name="gender" /> Female
        </div>
        <br></br>
        <div onChange={(e)=> setSec(e.target.value)}>
            <input type="radio" value="Cloudy" name="Weather" /> Cloudy
            <input type="radio" value="Sunny" name="Weather" />Sunny
        </div>

        {JSON.stringify(radioValues)}
        {JSON.stringify(first)}
        {JSON.stringify(sec)}

    </div>
  )
}

export default RadioPrac;