import Header from "./header/Header";
import Home from "./components/Home";
import Explore from './components/Explore';
import Footer from './footer/Footer'
import { Routes , Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header/> 
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/auction" element={<Explore />} />
      <Route path="/marketplace" element={<Explore />} />
      <Route path="/stats" element={<Explore />} />
      <Route path="/activity" element={<Explore />} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
