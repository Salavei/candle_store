import './App.css';
import Candles from './components/Candles/Candles';
import Footer from './components/Footer/Footer';
import Explore from "./components/Explore";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
   <div className="App">
      <Header/>
      <Main/>
      <Explore/>
   <Candles />
   <Footer />
   </div>
   )}

export default App;
