// import logo from './logo.svg';
import Menu from '../components/Menu';
import '../css/app.css';
import Home from './Home';
import TechnoAdd from './TechnoAdd';
import TechnoList from './TechnoList';

function App() {
  return (
    <>
      <Menu />
      <Home />
      <TechnoAdd />
      <TechnoList />
    </>
  );
}

export default App;
