import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CarouselTopic from "./CarouselTopic";
//import { useParams } from "react-router-dom";

const BooksContainer = ({entity, title}) => {

    //const {entity} = useParams();

    const [newbooks, setNewBooks] = useState([])
    

    const getNewBooks = async () => {
        const url = `https://openlibrary.org/${entity}.json?limit=5&offset=10`
        return await axios
        .get(url)
        .then(({data}) => setNewBooks(data.works))
        .catch((error) => console.error(error));
    }

    useEffect(() => {
        getNewBooks()
    },[])

    return <CarouselTopic 
            newbooks={newbooks}
            title = {title}
    />

}


export default BooksContainer;
