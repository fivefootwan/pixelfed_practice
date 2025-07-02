import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import AboutPage from './AboutPage';


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
        <Route path='/' element= {
          <div className='Content-Body'>

            <div className='Cards'>
              <div className='Card'>
                <p className='Username'>This is username</p>
                <img className='Post-Image'src='https://i.pinimg.com/736x/e6/81/51/e68151625fa88075ffa1f206b48bf9c9.jpg'/>
                <div className='Post-Details'>
                  <p>This is Card</p>
                  <p>|</p>
                  <p>This is Card</p>
                </div>
              </div>

              <div className='Card'>
                <p className='Username'>This is username</p>
                <img className='Post-Image'src='https://i.pinimg.com/736x/e6/81/51/e68151625fa88075ffa1f206b48bf9c9.jpg'/>
                <div className='Post-Details'>
                  <p>This is Card</p>
                  <p>|</p>
                  <p>This is Card</p>
                </div>
              </div>

            </div>

        </div>
        }/>
        <Route path='/aboutPage' element={<AboutPage />} />
      </Routes>

    </div>
  );
}

export default App;
