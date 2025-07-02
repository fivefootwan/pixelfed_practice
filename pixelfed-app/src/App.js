import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import AboutPage from './AboutPage';
import HomePage from './HomePage';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h1>
          Social Media Page
        </h1>

        <div className='Navigation-Menu'>
          <Link to='/'><p>Homepage</p></Link>
          <p>||</p>
          <Link to='/aboutPage'><p>About Page</p></Link>
        </div>

      </header>

      <Routes>
        <Route path='/' element= {<HomePage />}/>
        <Route path='/aboutPage' element={<AboutPage />} />
      </Routes>

    </div>
  );
}

export default App;
