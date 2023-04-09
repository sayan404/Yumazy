import React from 'react';
import { useState } from 'react';
import { BottomPage } from '../Components/BottomPage';
import './Home.css';
import Logo from '../img/logo.png'
export const Home = () => {
  const [search, setSearch] = useState('');
  const SearchedData = (e) => {
      let ele = e.target.value.trim() ;
      setSearch(ele);
  }
  return (
    <div className='main-container'>
       <div className='header-container'>
            <div className='main-header-container'>
                <div className='header-left'>
                    <img src={Logo} className="logo" alt="logo" />
                    <h2>YUMAZY</h2>
                </div>
              <div className='main'>
                <div className='wrapper'>
                  <div className="container">
                    <input type="search" className="search-field" placeholder="Search Food Name" name="search" onChange={SearchedData} autoComplete="off" />
                  </div>
                </div>
              </div>
                <div className='header-right'>
                    <ul>
                        <li>LOG IN</li>
                        <li>SIGN UP</li>
                    </ul>
                </div>

            </div>
        </div>
      <BottomPage className='buttom' onSearchFoods={search} />
    </div>
  )
}
