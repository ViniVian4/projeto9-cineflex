import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Sessions() {
    const params = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.id}/showtimes`);
        promisse.then(promisse => {setMovie(promisse.data)})
    }, []);

    return (
        <>a</>
    )   
}