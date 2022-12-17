import React, { createContext, useState } from "react";
import img from './../context/room-6.jpeg'

const dataProvider = createContext([]);


function Supplier(props) {
    const[data,setdata] = useState({title:"Single Basic Room",price:600,maxsize:400,guest:4,img});
    return(<>
        <dataProvider.Provider value={{data,setdata}}>
                {props.children}
        </dataProvider.Provider>
    </>)

}

export{dataProvider,Supplier}
