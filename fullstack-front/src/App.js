
import './App.css';
import Navbar from './layout/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Footer from './layout/Footer';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Calendar from './pages/Calendar';


function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          
        <Routes>
          
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/calendar" element={<Calendar />} />
         
        </Routes>
          <Footer />
      </Router>
     
     
    </div>
  );
}

export default App;
