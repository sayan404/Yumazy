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
                <div className='header-left'>
                    <img src={Logo} className="logo" alt="logo" />
                    <h2>YUMAZY</h2>
                </div>
              <div className='header-right'>
                  <div className="searchbar-container">
                    <input type="search" className="search-field" placeholder=" 🔍 Search By Food Name" name="search" onChange={SearchedData} autoComplete="off" />
                </div>
              </div>
        </div>
      <BottomPage className='buttom' onSearchFoods={search} />
    </div>
  )
}
