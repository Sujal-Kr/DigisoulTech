
import './App.css';
import Navbar from './Components/Navbar';
// import Nav from './Components/Nav';
import Info from './Components/Info';
// import Banner from './Components/Banner';
import Steps from './Components/Steps';
import Who from './Components/Who';
import Testimony from './Components/Testimony';
import Services from './Components/Services';
import Highlights from './Components/Highlights';
import Footer from './Components/Footer';
import SubBanner from './Components/SubBanner';
import About from './Components/About';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Career from './Components/Career';
import Error from './Components/Error';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Poster from './Components/Poster';
import VideoBanner from './Components/VideoBanner';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      {/* <Nav/> */}
      <Info/>
      
      <Routes>
        <Route path='/'exact element={<>
        {/* <Banner/> */}
        <VideoBanner/>
          <Steps/>
          <Who/>
          <Services/>
          <Testimony/>
          <Highlights/>
          <SubBanner/>
        </>}/>
      </Routes>
      <Routes>
        <Route path='/about'exact element={<>
        <>
        <Poster heading="You're building the future." subheading="Our Mission Help Your Business Growth"/>
        <About/>
        </>
        </>}/>
      </Routes>
      <Routes>
        <Route path='/team' exact element={<>
        <Poster heading="DigiSoulTech" subheading="Great Team With Innovative Ideas"/>
        <Team/>
        </>}/>
      </Routes>
      <Routes>
        <Route path="/contact" exact element={
          <>
            
            <Poster heading="DigiSoulTech" subheading="We accept challenge with passion"/>
            <Contact/>
          </>
        } />
      </Routes>
      <Routes>
        <Route path="/career" exact element={
          <>
            <Poster heading="Our Careers" subheading="What We Can Do For You"/>
            <Career/>
          </>
        }/>
      </Routes>
      <Routes>
        <Route path="/blog" element={<Error/>}/>
      </Routes>
      <Footer/>
    </Router>  
    </>
  );
}

export default App;
