
import React from 'react';
import { Route,Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Register from './components/Register';
import Login from './components/Login';
import EventPage from './components/EventPage';
import Admin from './components/Admin';

 
function App() {
  return (
    <div >
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path='/register' component={Register} />
<Route exact path='/login' component={Login} />
<Route exact path='/eventpage' component={EventPage} />
<Route exact path='/admin' component={Admin} />

    
      </Switch>
    </div>
  )
}

export default App;
