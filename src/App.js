import './App.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import LandingPage from './components/LandingPage';
import Exercises from './components/Exercises';
import UserDashboard from './components/UserDashboard';
import HEPEditor from './components/HEPEditor';
import AddCustomExercise from './components/AddCustomExercise';
import Profile from './components/Profile';

function App() {

  return (
    <BrowserRouter>
          <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={ <LandingPage /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/registration' element={ <Registration /> } />
          <Route path='/exercises' element={ <Exercises /> } />
          <Route path='/dashboard' element={<UserDashboard />} />
          <Route path='/hepeditor' element={ <HEPEditor /> } />
          <Route path='/addcustomexercise' element={ <AddCustomExercise /> } />
          <Route path='/profile' element={ <Profile /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
