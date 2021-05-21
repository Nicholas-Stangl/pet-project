import logo from './logo.svg';
import './App.css';
import { Router, Link } from '@reach/router';
import ShowAll from './components/ShowAll';
import OnePet from './components/OnePet';
import NewPet from './components/NewPet';
import EditPet from './components/EditPet';

function App() {
  return (
    <div className="App">
      <br/>
      <br/>
      <h1>Pet Shelter</h1>
      <Router>
      <ShowAll path="/"></ShowAll>
      <NewPet path="/pets/new"></NewPet>
      <OnePet path="/pets/:petId"></OnePet>
      <EditPet path="/pets/:petId/edit"></EditPet>
      </Router>
    </div>
  );
}

export default App;
