// Importações necessárias
import Nav from "./Components/Nav";
import Homepage from './Components/Homepage';
import About from './Components/About';
import Atuation from './Components/Atuation';
import './style/common.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Rotas do App
export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path='/' element={ <Homepage /> }></Route>
          <Route exact path='/home/' element={ <Homepage /> }></Route>
          <Route exact path='/about' element={ <About /> }></Route>
          <Route exact path='/atuation' element={ <Atuation /> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

