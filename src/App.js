import React from "react";
import "./App.css";
import List from './List';
import Homepage from './templates/Homepage';
import Delete from './templates/Delete';
import AddTask from './templates/Add';
import Info from './templates/Info';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App(){
  return(
    <div className="app_body">
      <Router>
        <Switch>
          <Route path="/list" component={List} />
          <Route path="/delete/:id" component={Delete} />
          <Route path="/add/" component={AddTask} />
          <Route path="/task/:id" component={Info} />
          <Route exact path="/" component={Homepage} />
          
        </Switch>
      </Router>
      </div>
    
  );
}

export default App;
