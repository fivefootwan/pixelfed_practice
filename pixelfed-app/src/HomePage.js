
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className='Content-Body'>
            
            <div className='Cards'>
              <h2>EXPLORE</h2>
              <div className='Card'>
                <Link to='/userPage'><p className='Username'>This is username</p></Link>
                <img className='Post-Image'src='https://i.pinimg.com/736x/d6/68/c6/d668c6408b13816078fe95a40741a158.jpg'/>
                <div className='Post-Details'>
                  <p>This is Card</p>
                  <p>|</p>
                  <p>This is Card</p>
                </div>
                <div className="Post-Comment">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
              </div>

              <div className='Card'>
                <p className='Username'>This is username</p>
                <img className='Post-Image'src='https://i.pinimg.com/736x/e6/81/51/e68151625fa88075ffa1f206b48bf9c9.jpg'/>
                <div className='Post-Details'>
                  <p>This is Card</p>
                  <p>|</p>
                  <p>This is Card</p>
                </div>
                <div className="Post-Comment">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
              </div>

            </div>

        </div>
    )
}

export default HomePage;