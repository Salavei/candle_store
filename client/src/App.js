import './App.css';
import '../src/Components/CandleCreator/style.css';

import SignIn from './Components/SignIn/SignIn';
import Registration from './Components/Registration/Registration';
import {useSelector} from "react-redux";

import MainPage from './Components/MainPage/MainPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";
import Creator from "./Components/CandleCreator";
import CheckLogin from "./Components/SearchLogin/checkLogin";


function App() {

    const correctUser = useSelector((state) => state?.counter.user);



   return (

       <Router>
           <div className={'App'}>
               <nav >
                   <ul>
                       <li>
                           <Link to="/">Login</Link>
                       </li>
                       <li>
                           <Link to="/main">Основная страница</Link>
                       </li>
                       <li>
                           <Link to="/registration">Страница регистрации</Link>
                       </li>
                       <li>
                           <Link to="/createCandle">Собрать свою свечу</Link>
                       </li>
                       {/* <li>
                           <Link to="/searchTheLogin">searchTheLogin</Link>
                       </li> */}
                   </ul>
               </nav>

               {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
               <Switch>
                   <Route path="/main">
                        <MainPage/>
                   </Route>
                   <Route path="/createCandle">
                       <Creator />
                   </Route>
                   <Route path="/registration">
                         {correctUser === 'faithful user ?' ? <Redirect to = "/main" /> : <Registration/> } 
                   </Route>
                   <Route path="/">
                       {correctUser === 'faithful user ?' ? <Redirect to = "/main" /> : <SignIn /> }
                   </Route>
                   <Route path="/searchTheLogin">
                       <CheckLogin/>
                   </Route>
               </Switch>
           </div>
       </Router>
       )
}

export default App;
