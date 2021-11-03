import './App.css';
import Home from "./componants/Home";
import Search from "./componants/Search";
import Deteals from "./componants/Deteals";
import WatchLater from "./componants/WatchLater";
import React from 'react';
import { Route} from "react-router-dom";

function App() {
  

  return( 
    <div>
       <Route exact path="/" component={Home} />
      <Route path="/Search" component={Search} />
      <Route path="/Deteals/:id" component={Deteals} />
      <Route path="/WatchLater" component={WatchLater} />
    </div>
        
  );
 
}

export default App;

