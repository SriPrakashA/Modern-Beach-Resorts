import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { dataProvider } from '../../context/context';
import './../singleroom banner/singleroombanner.css'
import image1 from './../singleroom banner/img-1.jpeg'
import image2 from './../singleroom banner/img-2.jpeg'
import image3 from './../singleroom banner/img-3.jpeg'

function Singleroombanner() {
    const {data} = useContext(dataProvider);
    return (
        <>
        <div className="singleroom" style={{ backgroundImage: `url(${data.img})` }}>
            <div className="singleroom-center">
                <h1>{data.title}</h1>
                <h2 className='empty-div'> </h2>
                <button><Link to='/rooms' className='back-to-rooms'>Back to Rooms</Link></button>
            </div>
        </div>
        <div className='singleroom-images'>
            <img src={image1} alt='room'/>
            <img src={image2} alt='room'/>
            <img src={image3} alt='room'/>
        </div>
        <div className='singleroom-details-info'>
            <div className='singleroom-details'>
                <h2>Details:</h2>
                <p>Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.</p>
            </div>
            <div className='singleroom-info'>
                <h2>Information:</h2>
                <p className='singleroom-info-p'>Price : ${data.price}</p> <br/>
                <p className='singleroom-info-p'>Size : {data.maxsize} SQFT</p> <br/>
                <p className='singleroom-info-p'>Max Capacity : {data.guest} Person</p> <br/>
                <p className='singleroom-info-p'>No Pets Allowed</p>
            </div>
        </div>
        <div className='extras'>
            <h2>Extras:</h2>
            <div className='extra-lists'>
                <div className='list'>
                    <h3>- Plush pillows and breathable bed linens</h3>
                    <h3>- Complimentary refreshments</h3>
                    <h3>- Comfortable beds</h3>
                </div>
                <div className='list'>
                    <h3>- Soft, oversized bath towels</h3>
                    <h3>- Adequate safety/security</h3>
                </div>
                <div className='list'>
                    <h3>- Full-sized, pH-balanced toiletries</h3>
                    <h3>- Internet</h3>
                </div>
            </div>
        </div>

        </>
    )
}

export { Singleroombanner }