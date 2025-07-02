import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import UserPage from './UserPage';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Link to='/' className='HomePage-Logo'><h1>
          Social Media Page
        </h1>
        </Link>

        <div className='Navigation-Menu'>
          <Link to='/' className='Nav-Item'><p>Homepage</p></Link>
          <p>||</p>
          <Link to='/aboutPage' className='Nav-Item' ><p>About Page</p></Link>
        </div>

      </header>

      <Routes>
        <Route path='/' element= {<HomePage />}/>
        <Route path='/aboutPage' element={<AboutPage />} />
        <Route path='/userPage' element={<UserPage />}/>
      </Routes>

    </div>
  );
}

export default App;
