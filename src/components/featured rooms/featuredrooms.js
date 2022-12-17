import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { dataProvider } from '../../context/context';
import img1 from './../featured rooms/details-1.jpeg';
import img2 from './../featured rooms/details-2.jpeg';
import img3 from './../featured rooms/details-3.jpeg';
import './../featured rooms/featuredrooms.css'

function Featuredrooms() {
    const {setdata} = useContext(dataProvider);
    const featuredrooms = [
        {
            id: 1,
        title: 'Double Deluxe',
        img: img1,
        price: 500,
        category: 'Double Cot',
        guest:4,
        minsize:550,
        maxsize:700
        },
        {
            id: 2,
        title: 'Family Deluxe',
        img: img2,
        price: 650,
        category: 'Family',
        guest:8,
        minsize:650,
        maxsize:850
        },
        {
            id: 3,
        title: 'Presidential',
        img: img3,
        price: 1000,
        category: 'Presidential',
        guest:8,
        minsize:800,
        maxsize:1000
        }
    ]

    function clicked(item) {
        setdata(item);
    }


    return(
        <div className="featuredrooms">
                <div className='featuredrooms-head'>
                    <h2>Featured Rooms</h2>
                    <div className='empty'></div>
                </div>
                <div className='featuredrooms-images'>
                    {featuredrooms.map((item)=>{
                        return(
                            <div className='rooms' key={item.id}>
                                <img src={item.img} alt='room'/>
                                <h2>{item.title}</h2>
                                <div className='room-price'>
                                    <h3>${item.price}</h3>
                                    <h4>Per night</h4>
                                </div>
                                <div className='hover-me'>
                                        <h2> <Link to='/rooms/singleroom' onClick={()=>{clicked(item)}}>Feature</Link> </h2>
                                </div>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}

export{Featuredrooms}