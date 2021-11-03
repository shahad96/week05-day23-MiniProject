import './App.css';
import Home from "./componants/Home";
import Search from "./componants/Search";
import React from 'react';
import { Link ,Route} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "./reducers/watch_later_search/watchLaterAndvideoVideos";

function App() {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      searchValue: state.watchLaterAndvideoVideos.searchValue,
    };
  });

  function searchValueFun(e){
    const action = setSearchValue(e.target.value);
            dispatch(action);
  }
 
 
  return( 
    <div>
       <input onChange={searchValueFun}></input>
      <Link to="/Search"><p><button>Search</button></p></Link>
       <Route path="/" component={Home} />
      <Route path="/Search" component={Search} />
    </div>
        
  );
 
}

export default App;

