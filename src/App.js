import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Service from './pages/Service';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        
        <Route path='' element={<LandingPage/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>

      </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
