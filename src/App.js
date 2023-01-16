//React
import './App.css';
import {Link} from "react-dom"
//Components
import Navbar from './Components/Navbar/Navbar/Navbar';
import Sidebar from './Components/Navbar/Sidebar/Sidebar';
import Submenu from './Components/Navbar/Submenu/Submenu';
import TutoringPage from './Components/PageSections/Pages/TutoringPage';

// Test 1

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Submenu />
      <TutoringPage />
    </div>
  );
}

export default App;
