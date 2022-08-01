import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Movie from './Movie';


export default function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");
        promise.then((promisse) => { setMovies(promisse.data); });
    }, []);


    return (
        <>
            <Container>
                {
                    movies.map((movie) => (
                        <Movie posterURL={movie.posterURL} id={movie.id} />
                    ))
                }

            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    width: 85%;

    margin-top: 30px;

`;