// import logo from './logo.svg';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Menu from '../components/Menu';
import '../css/app.css';
import Home from './Home';
import TechnoAdd from './TechnoAdd';
import TechnoList from './TechnoList';

function App() {
  const [technos, setTechnos] = useState([])

  function handleAddTechno(techno) {
    console.log("handleAddTechno",techno)
  }
  return (
    <>
    <Menu />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add' element={<TechnoAdd handleAddTechno={handleAddTechno} />} />
      <Route path='/list' element={<TechnoList />} />
    </Routes>
      {/* <Menu />
      <Home />
      <TechnoAdd />
      <TechnoList /> */}
    </>
  );
}

export default App;
