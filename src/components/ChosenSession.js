import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";

export default function ChosenSession() {
    const params = useParams();
    const [session, setSession] = useState(null);

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.id}/seats`);
        promisse.then(promisse => { setSession(promisse.data) });
    }, []);

    return (
        <>
            <Container><h1>Selecione o(s) assento(s)</h1>
                <SeatsContainer>
                <Seat>1</Seat><Seat>1</Seat><Seat>1</Seat><Seat>1</Seat><Seat>1</Seat><Seat>1</Seat><Seat>1</Seat><Seat>1</Seat><Seat>1</Seat><Seat>1</Seat><Seat>1</Seat><Seat>1</Seat>
                </SeatsContainer>
            </Container>
        </>
    );
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
`;

const SeatsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    

    width: 80%;

`;

const Seat = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 26px;
    height: 26px;

    margin-right: 5px;
    margin-bottom: 5px;

    border: 1px solid #808F9D;

    background-color: #C3CFD9;

    border-radius: 50%;

    p {
        font-size: 11px;
    }
`;