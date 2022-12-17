import{Link} from 'react-router-dom'
import './../section/section.css'
import background from './../section/section.jpeg'

function Section() {
    return(
        <div className="section" style={{ backgroundImage:`url(${background})` }}>
        <div className="section-center">
            <h1>Our Rooms</h1>
            <h2 className='empty-div'> </h2>
            <button><Link to='/' className='return-home'>Return Home</Link></button>
        </div>
    </div>
    )
}

export{Section}