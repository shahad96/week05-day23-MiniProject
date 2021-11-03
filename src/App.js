import { useState, useEffect } from "react";
import './App.css';
import Home from "./componants/Home";
import Search from "./componants/Search";
import React from 'react';

function App() {
  const [toggle,setToggle]=useState(false)

  const [searchValue,setSearchValue]=useState('');

  function searchValueFun(e){
    setSearchValue(e.target.value);
  }
  function clickSearchFun(){
    if(searchValue != ''){ 
    setToggle(true)
    // Search.forceUpdate();
    }
    else{
      setToggle(false)
      // App.forceUpdate();
    }
  }
 
  return( 
    <div>
      <input onChange={searchValueFun}></input>
      <button onClick={clickSearchFun}>Search</button>
      {toggle?(<Search searchValue={searchValue}/>):(<Home/>)} 
      
    </div>
        
  );
 
}

export default App;

