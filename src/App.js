import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import FirstScreen from './screens/FirstScreen';
import Feel from './components/feel/Feel';
import WhoFits from './components/fit/WhoFits';
import ThirdScreen from './screens/ThirdScreen';
import SecondScreen from './screens/SecondScreen';
import ForthScreen from './screens/ForthScreen';
import Silabus from './components/silabus/Silabus';
import FormScreen from './components/form/FormScreen';

function App() {
  const [scrolled, setScrolled] = useState(false);


    const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);



  return <>
  <div className="background">
  <NavBar/>

  <FirstScreen/>
  <ThirdScreen/>
  <Feel/>
  <FormScreen/>
  <ForthScreen/>
  <WhoFits/>
  <Silabus/>
  <FormScreen/>
  </div>
  </>
}

export default App;
