import Header from "./header/Header";
import Home from "./components/Home";
import Explore from './components/Explore';
import Footer from './footer/Footer';
import Auction from './components/Auction';
import MarketPlace from './components/MarketPlace';
import Stats from './components/Stats';
import Activity from './components/Activity'
import { Routes , Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header/> 
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/auction" element={<Auction />} />
      <Route path="/marketplace" element={<MarketPlace />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/activity" element={<Activity />} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
