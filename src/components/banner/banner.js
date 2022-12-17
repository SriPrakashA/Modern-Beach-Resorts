import './../banner/banner.css';
import background from './../banner/defaultBcg2.jpg'
import{Link} from 'react-router-dom'

function Banner() {
    return(
        <div className="banner" style={{ backgroundImage:`url(${background})` }}>
            <div className="banner-center">
                <h1>Luxurious Rooms</h1>
                <h2 className='empty-div'> </h2>
                <h2>Deluxe Rooms Starting At $299</h2>
                <button><Link to='/rooms' className='our-rooms'>OUR ROOMS</Link></button>
            </div>
        </div>
    )
}

export{Banner}