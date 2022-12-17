import { useState } from 'react'
import { Link } from 'react-router-dom';
import './../header/header.css'

function Header() {
    const[click,setclick] = useState(false);

    return (
        <div className="header">
            <div className="navbar">
                <div className="logo">
                    <h2 className='fullname'> <span>M</span>odern <span>B</span>each <span>R</span>esorts</h2>
                    <h2 className='altername'> <span>M</span> <span>B</span> <span>R</span></h2>
                </div>
              
                    <ul className={click?"nav-links active":"nav-links"}>
                        <li> <Link to='/' className='heads'>Home</Link></li>
                        <li><Link to='/rooms' className='heads'>Rooms</Link></li>
                    </ul>
              
            </div>
            <button className='nav-btn' onClick={()=>{setclick(!click)}}>{click?<i className="fa-solid fa-xmark"></i>:<i className="fa-solid fa-bars"></i>}</button>

        </div>

    )
}
export { Header }