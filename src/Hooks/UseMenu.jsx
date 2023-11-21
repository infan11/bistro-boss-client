// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const UseMenu = () => {
    const axiosPublic = useAxiosPublic()
//    const [menu , setMneu] = useState([]);
//    const [loading , setLoading] = useState(true)
//    useEffect(()=> {
//     fetch('http://localhost:5000/menu')
//     .then(res => res.json())
//     .then(data => {
//         setMneu(data)
//         setLoading(false)
//     })
//    } ,[])

// or

// tenstack        

const {data: menu = [], ispending: loading , refetch} = useQuery({
    queryKey: ["menu" ],
    queryFn: async() =>{
        const res = await axiosPublic.get("/menu")
        return res.data
    } 
})
 
    return[menu, loading, refetch]
};

export default UseMenu;