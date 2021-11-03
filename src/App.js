import { useState, useEffect } from "react";
import './App.css';
import Home from "./componants/Home";
import Search from "./componants/Search";


function App() {
  const [toggle,setToggle]=useState(false)

  const [searchValue,setSearchValue]=useState('');

  function searchValueFun(e){
    if(e.target.value != ''){ 
    setToggle(true)
    setSearchValue(e.target.value);
    }
    else{
      setToggle(false)
    }
  }
 
  return( 
    <div>
      <input onChange={searchValueFun}></input>
      <button>Search</button>
      {toggle?(<Search searchValue={searchValue}/>):(<Home/>)} 
      
    </div>
        
  );
 
}

export default App;

