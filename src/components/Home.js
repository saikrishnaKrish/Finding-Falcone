import React from 'react';
import Dropdown from './dropdown';
import './home.css';

const Home = () => {
  return (
    <div>Home component
      <div className='container'>
        <div className='dropdown1'>
          <Dropdown />
        </div>
        <div className='dropdown2'>
          <Dropdown />
        </div>
        <div className='dropdown3'>
          <Dropdown />
        </div>
        <div className='dropdown4'>
          <Dropdown />
        </div>
      </div>
    </div>


  )
}

export default Home