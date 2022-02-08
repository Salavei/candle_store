import './App.css';


import Creator from "./Components/CandleCreator";
import Candles from './Components/Candles/Candles';
import Footer from './Components/Footer/Footer';
import Explore from "./Components/Explore";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  return (
   <div className="App">
      <Header/>
      <Main/>
      <Explore/>
       <Candles />
       <Footer />
      {/* <Creator/>*/}
   </div>
   )}


export default App;
