import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import axios from "axios";

import BottomBar from "./BottomBar";

export default function Sessions() {
    const params = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.id}/showtimes`);
        promisse.then(promisse => { setMovie(promisse.data) });
    }, []);

    if (movie === null)
        return (<></>)

    return (
        <>
            <Container>
                <h1>Selecione o horário</h1>

                <ContainerSessions>

                    {
                        movie.days.map((day) => (
                            <>
                                <p>{day.weekday} - {day.date}</p>
                                <ContainerTime>
                                    {
                                        day.showtimes.map((showtime) => (
                                            <Link to={`/session/${showtime.id}`} style={{ textDecoration: 'none' }}>
                                                <Time>{showtime.name}</Time>
                                            </Link>

                                        ))
                                    }
                                </ContainerTime>

                            </>
                        ))
                    }

                </ContainerSessions>


            </Container>

            <BottomBar image={movie.posterURL} title={movie.title} />

        </>
    )
}


const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;

    margin-top: 100px;

    h1 {
        color: #293845;
        font-size: 24px;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
    }

`;

const ContainerSessions = styled.div`    
    width: 85%;

    margin-top: 30px;
    margin-bottom: 130px;

`;

const ContainerTime = styled.div`
    display: flex;

`

const Time = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 43px;
    width: 80px;

    margin-top: 10px;
    margin-right: 15px;
    margin-bottom: 20px;

    border-radius: 5px;

    color: #FFFFFF;

    background-color: #E8833A;
`;