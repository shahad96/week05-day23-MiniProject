import './App.css';
import Home from "./componants/Home";
import Search from "./componants/Search";
import React from 'react';
import { Route} from "react-router-dom";

function App() {
  

  return( 
    <div>
       <Route exact path="/" component={Home} />
      <Route path="/Search" component={Search} />
    </div>
        
  );
 
}

export default App;

