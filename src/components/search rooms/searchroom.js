import { useState,useContext } from 'react'
import { dataProvider } from '../../context/context';
import './../search rooms/searchrooms.css';
import { Link } from 'react-router-dom';
import image1 from './../images/room-1.jpeg'
import image2 from './../images/room-2.jpeg'
import image3 from './../images/room-3.jpeg'
import image4 from './../images/room-4.jpeg'
import image5 from './../images/room-5.jpeg'
import image6 from './../images/room-6.jpeg'
import image7 from './../images/room-7.jpeg'
import image8 from './../images/room-8.jpeg'
import image9 from './../images/room-9.jpeg'
import image10 from './../images/room-10.jpeg'
import image11 from './../images/room-11.jpeg'
import image12 from './../images/room-12.jpeg'
import image13 from './../images/room-13.jpeg'

const searchrooms = [
    {
        id: 1,
        title: 'Single Economy',
        img: image1,
        price: 400,
        category: 'Single Cot',
        guest:2,
        minsize:350,
        maxsize:400
    },
    {
        id: 2,
        title: 'Single Basic',
        img: image2,
        price: 400,
        category: 'Single Cot',
        guest:1,
        minsize:200,
        maxsize:400
    },
    {
        id: 3,
        title: 'Presidential',
        img: image3,
        price: 1000,
        category: 'Presidential',
        guest:8,
        minsize:800,
        maxsize:1000
    },
    {
        id: 4,
        title: 'Single Deluxe',
        img: image4,
        price: 400,
        category: 'Single Cot',
        guest:3,
        minsize:500,
        maxsize:600
    },
    {
        id: 5,
        title: 'Family Economy',
        img: image5,
        price: 650,
        category: 'Family',
        guest:5,
        minsize:750,
        maxsize:850
    },
    {
        id: 6,
        title: 'Family Basic',
        img: image6,
        price: 650,
        category: 'Family',
        guest:4,
        minsize:650,
        maxsize:750
    },
    {
        id: 7,
        title: 'Family Standard',
        img: image7,
        price: 650,
        category: 'Family',
        guest:5,
        minsize:600,
        maxsize:800
    },
    {
        id: 8,
        title: 'Family Deluxe',
        img: image8,
        price: 650,
        category: 'Family',
        guest:8,
        minsize:650,
        maxsize:850
    },
    {
        id: 9,
        title: 'Double Deluxe',
        img: image9,
        price: 500,
        category: 'Double Cot',
        guest:4,
        minsize:550,
        maxsize:700
    },
    {
        id: 10,
        title: 'Double Basic',
        img: image10,
        price: 500,
        category: 'Double Cot',
        guest:3,
        minsize:450,
        maxsize:600
    },
    {
        id: 11,
        title: 'Double Standard',
        img: image11,
        price: 500,
        category: 'Double Cot',
        guest:4,
        minsize:500,
        maxsize:700
    },
    {
        id: 12,
        title: 'Double Economy',
        img: image12,
        price: 500,
        category: 'Double Cot',
        guest:4,
        minsize:600,
        maxsize:700
    },
    {
        id: 13,
        title: 'Presidential',
        img: image13,
        price: 1000,
        category: 'Presidential',
        guest:8,
        minsize:800,
        maxsize:1000
    },

]



function Searchroom() {
    const [roomtype, setroomtype] = useState(searchrooms);
    const [range, setrange] = useState(600);
    const {setdata} = useContext(dataProvider);


    function selectedroomtype(e) {
        const result = e.target.value;
        if (result === 'All') {
            setroomtype(searchrooms)
        }
        else {
            const filters = searchrooms.filter((el) => {
                return el.category === result
            })
            setroomtype(filters);
        }
    }

    function selectrange(e) {
        const result = e.target.value;
        setrange(result)
        const filters = searchrooms.filter((el) => {
            return el.price >= result
        })
        setroomtype(filters);
    }

    function selectguests(e) {
        const result = e.target.value;
        const filters = searchrooms.filter((el) => {
            return el.guest >= result
        })
        setroomtype(filters);

    }

    function selectminsize(e) {
        const result = e.target.value;
         const filters = searchrooms.filter((el)=>{
            return el.minsize >= result});
            setroomtype(filters);
    }
    function selectmaxsize(e) {
        const result = e.target.value;
         const filters = searchrooms.filter((el)=>{
            return el.minsize <= result});
            setroomtype(filters);
    }

    function clicked(item) {
        setdata(item);
    }

    return (<>
        <div className="search-head">
            <h2>Search Rooms </h2>
            <div className="empty"></div>
        </div>
        <div className='search-filter'>
            <div className='rooms-type-filter'>
                <h2>Rooms type</h2>
                <select onChange={(e) => { selectedroomtype(e) }}>
                    <option >All</option>
                    <option>Single Cot</option>
                    <option>Double Cot</option>
                    <option>Family</option>
                    <option>Presidential</option>
                </select>
            </div>
            <div className='guest-filter'>
                <h2>Guests</h2>
                <select onChange={(e) => { selectguests(e) }}>
                    <option >1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>8</option>
                </select>
            </div>
            <div className='price-range-filter'>
                <h2>Rooms Price ${range}</h2>
                <input type='range' min='0' max='1000' onChange={(e) => { selectrange(e) }} />
            </div>
            <div className='room-size-filter'>
                <h2>Rooms Size</h2>
                <div className='room-size-inuts'>
                <input type='number'  onChange={(e)=>{selectminsize(e)}} placeholder='0' />
                <input type='number'  onChange={(e)=>{selectmaxsize(e)}} placeholder='1000'/>
                </div>
            </div>
        </div>
        <div className='rooms-available'>
            {roomtype.map((item) => {
                return (<>
                    <div className='searchroom' key={item.id}>

                        <img src={item.img} alt='room'/>
                        <h2>{item.title}</h2>
                        <div className='searchroom-price'>
                            <h3>${item.price}</h3>
                            <h4>Per night</h4>
                        </div>
                        <div className='hover-me'>
                            <h2> <Link to='/rooms/singleroom' onClick={()=>{clicked(item)}}>Feature</Link> </h2>
                        </div>

                    </div>
                </>)
            })}
        </div>
    </>)
}

export { Searchroom }