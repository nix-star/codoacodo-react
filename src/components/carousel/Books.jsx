/* import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Carousel from "./Carousel";


const Books = () =>{

        const [newbooks, setNewBooks] = useState([])
        const getNewBooks = async () => {
            const url = 'https://openlibrary.org/trending/daily.json?limit=5&offset=10'
            return await axios
            .get(url)
            .then(({data}) => setNewBooks(data.works))
            .catch((error) => console.error(error));
        }
    
        useEffect(() => {
            getNewBooks()
        },[])

return(
    <>
        
        <div>
            <Carousel newbooks={ newbooks }/> 
        </div>
    </>

)
}
export default Books; */