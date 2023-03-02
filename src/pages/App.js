// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Menu from '../components/Menu';
import '../css/app.css';
import Home from './Home';
import TechnoAdd from './TechnoAdd';
import TechnoList from './TechnoList';

function App() {
  return (
    <>
    <Menu />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add' element={<TechnoAdd />} />
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
