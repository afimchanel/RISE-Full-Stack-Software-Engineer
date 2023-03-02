import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar_menu from './components/Navbar_menu';
import Boxfrst from './components/Boxfrst';
import Boxsecond from './components/Boxsecond';
import Boxthird from './components/Boxthird';
import Boxfourth from './components/Boxfourth';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar_menu />
      <Boxfrst />
      <Boxsecond />
      <Boxthird />
      <Boxfourth />
      <Footer/>
    </>
  );
}


export default App;
