import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function Sucess() {
    const {state} = useLocation();
    const { movie, day, time, seats, name, cpf } = state;
    
    return (
        <>
            <Container>
                <h1>Pedido feito
                    com sucesso!</h1>

                <InfoContainer>
                    <h1>Filme e sessão</h1>
                    <p>{movie}</p>
                    <p>{day} {time}</p>
                </InfoContainer>

                <InfoContainer>
                    <h1>Ingressos</h1>
                    {
                    seats.map(seat => (
                        <p>Assento {seat}</p>
                    ))}
                </InfoContainer>

                <InfoContainer>
                    <h1>Comprador</h1>
                    <p>{name}</p>
                    <p>{cpf}</p>
                </InfoContainer>

                <Link to="/" style={{ textDecoration: 'none' }}><HomeButton>Voltar pra Home</HomeButton></Link>

                
            </Container>

        </>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;

    margin-top: 100px;
    margin-bottom: 130px;

    h1 {
        color: #247A6B;
        font-size: 24px;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    width: 85%;

    margin-top: 20px;

    h1 {
        color: black;
        font-weight: bold;
        font-size: 22px;

        margin-bottom: 15px;
    }

    p {
        font-size: 22px;
        margin-bottom: 5px;
    }

`

const HomeButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 225px;
    height: 50px;

    margin-top: 50px;

    border-radius: 10px;

    background-color: #E8833A;
    color: #FFFFFF;
`;