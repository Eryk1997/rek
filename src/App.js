import './App.css';

import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'

import Show from './views/show/Show'
import Add from './views/add/Add'
import Edit from "./views/edit/Edit";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/show" component={Show} />
        <Route path="/add" component={Add} />
        <Route path="/edit" component={Edit} />
      </Switch>
    </div>
  );
}

export default App;
