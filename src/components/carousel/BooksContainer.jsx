import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CarouselWoman from "./CarouselWoman";
import { useParams } from "react-router-dom";

const BooksContainer = ({entity, title}) => {

    //const {entity} = useParams();
    console.log(`esto es entity: `, entity);
    console.log(`esto es titulo: `, title);
    const [newbooks, setNewBooks] = useState([])
    

    const getNewBooks = async () => {
        const url = `https://openlibrary.org/subjects/${entity}.json?limit=5&offset=10`
        return await axios
        .get(url)
        .then(({data}) => setNewBooks(data.works))
        .catch((error) => console.error(error));
    }

    useEffect(() => {
        getNewBooks()
    },[])

    return <CarouselWoman 
            newbooks={newbooks}
            title = {title}
    />

}


export default BooksContainer;
