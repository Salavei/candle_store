import './App.css';

import SignIn from './Components/SignIn/SignIn';
import Registration from './Components/Registration/Registration';

import MainPage from './Components/MainPage/MainPage';
import {
   Route,
   Switch,
   Redirect,
   withRouter
 } from "react-router-dom"

function App() {
   
   return (
      <div className="App">
         <Switch>
         <Route path='/home' component={MainPage} />
         <Route  path='/SignIn' component={SignIn} />
         <Route path='/Registration' component={Registration} />
         <Redirect from='/' to='/home'/>
         </Switch>
      </div>
   )
}

export default App;
