import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <h1>
          Title Page
        </h1>

        <div className='Navigation-Menu'>
          <p>Homepage</p>
          <p>||</p>
          <p>About Page</p>
        </div>

      </header>

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

    </div>
  );
}

export default App;
