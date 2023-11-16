import { useEffect, useState } from "react";


const UseMenu = () => {
   const [menu , setMneu] = useState([]);
   const [loading , setLoading] = useState(true)
   useEffect(()=> {
    fetch('http://localhost:5000/menu')
    .then(res => res.json())
    .then(data => {
        setMneu(data)
        setLoading(false)
    })
   } ,[])


    return[menu, loading]
};

export default UseMenu;