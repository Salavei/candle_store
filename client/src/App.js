import './App.css';
import Candles from './components/Candles/Candles';
import Footer from './components/Footer/Footer';
import Explore from "./components/Explore";
import Header from "./components/Header";
import Main from "./components/Main";
import SignIn from './components/SignIn/SignIn';
import Registration from './components/Registration/Registration';

function App() {
   return (
      <div className="App">
         {/* <Header/>
      <Main/>
      <Explore/>
   <Candles />
   <Footer /> */}
         <SignIn />
         {/* <Registration /> */}
      </div>
   )
}

export default App;
