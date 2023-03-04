import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar_menu from './components/Navbar_menu';
import Boxfrst from './components/Boxfrst';
import Boxsecond from './components/Boxsecond';
import Boxthird from './components/Boxthird';
import Boxfourth from './components/Boxfourth';
import Footer from './components/Footer';
function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidthAndHeight = () => {
      setWidth(window.innerWidth);
  };
  useEffect(() => {
      window.addEventListener("resize", updateWidthAndHeight);
      return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  return (
    <div >
      <Navbar_menu width={width}/>
      <Boxfrst width={width}/>
      <Boxsecond width={width}/>
      <Boxthird width={width}/>
      <Boxfourth width={width}/>
      <Footer width={width}/>
    </div>
  );
}


export default App;
