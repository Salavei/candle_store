import './App.css';
import Candles from './Components/Candles/Candles';
import Footer from './Components/Footer/Footer';
import SignIn from './Components/SignIn/SignIn';
import Registration from './Components/Registration/Registration';
import Header from './Components/Header/index'
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
         <Route path='/home' component={Header} />
         {/* <Header /> */}
         {/* <Main />
         <Explore />
         <Candles />
         <Footer /> */}
         <Route  path='/SignIn' component={SignIn} />
         <Route path='/Registration' component={Registration} />
         <Redirect from='/' to='/home'/>
         {/* <SignIn />
         <Registration /> */}
         </Switch>
      </div>
   )
}

export default App;
