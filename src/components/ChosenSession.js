import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";
import BottomBar from "./BottomBar";

export default function ChosenSession() {
    const params = useParams();
    const [session, setSession] = useState(null);
    const [selected, setSelected] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.id}/seats`);
        promisse.then(promisse => { setSession(promisse.data) });
    }, []);

    function setColor(seat) {
        if (seat.isAvailable && selected.includes(seat.name))
            return "#8DD7CF";
        else if (seat.isAvailable)
            return "#C3CFD9";
        else
            return "#FBE192";
    }

    function setBorderColor(seat) {
        if (seat.isAvailable && selected.includes(seat.name))
            return "#1AAE9E";
        else if (seat.isAvailable)
            return "#7B8B99";
        else
            return "#F7C52B";
    }

    function select(seat) {
        if (!seat.isAvailable) {
            alert("Esse assento não está disponível");
            return;
        }

        if (selected.includes(seat.name)) {
            const newSelected = selected.filter(s => seat.name != s);
            setSelected(newSelected);
        }
        else {
            setSelected([...selected, seat.name]);
        }
    }

    function HandleForm (event) {
        event.preventDefault();

        const promise = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", 
        {
            ids: selected,
            name: name,
            cpf: cpf
        });
        promise.then((resposta) => {console.log(resposta)})

        console.log(selected);

        navigate('/sucess', {state: {
            movie: session.movie.title,
            day: session.day.date,
            time: session.name,
            seats: [...selected],
            name: name,
            cpf: cpf
            }});

    }

    if (session === null)
        return (<></>)

    return (
        <>
            <Container><h1>Selecione o(s) assento(s)</h1>
                <SeatsContainer>
                    {
                        session.seats.map(seat => {


                            return (
                                <Seat onClick={() => { select(seat) }} color={setColor(seat)} borderColor={setBorderColor(seat)}><p>{seat.name}</p></Seat>
                            )
                        })
                    }
                </SeatsContainer>

                <Examples>
                    <Example color={"#8DD7CF"} borderColor={"#1AAE9E"}></Example>
                    <Example color={"#C3CFD9"} borderColor={"#7B8B99"}></Example>
                    <Example color={"#FBE192"} borderColor={"#F7C52B"}></Example>
                </Examples>
                <Examples>
                    <p>Selecionado</p>
                    <p>Disponível</p>
                    <p>Indisponível</p>
                </Examples>

                <Form onSubmit={HandleForm}>
                    <div>
                        <h2>Nome do comprador</h2>
                        <input type="text" value={name} placeholder="Digite seu nome..." onChange={v => setName(v.target.value)} required />
                    </div>


                    <div>
                        <h2>CPF do comprador</h2>
                        <input type="text" pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
                         value={cpf} placeholder="Digite seu CPF..." onChange={v => setCpf(v.target.value)} required 
                         />
                    </div>

                    <SubmitButton type="submit">
                        <p>Reservar assento(s)</p>
                    </SubmitButton>

                </Form>

            </Container>

            <BottomBar image={session.movie.posterURL} title={session.movie.title} session={session} />
        </>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;

    margin-top: 100px;
    margin-bottom: 130px;

    h1 {
        color: #293845;
        font-size: 24px;
    }
`;

const SeatsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    margin-top: 20px;    

    width: 85%;

`;

const Seat = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 26px;
    height: 26px;

    margin-right: 5px;
    margin-bottom: 10px;

    border: 1px solid;
    border-color: ${props => props.borderColor};

    background-color: ${props => props.color};

    border-radius: 50%;

    p {
        font-size: 11px;
    }
`;

const Examples = styled.div`
    display: flex;
    justify-content: space-around;

    margin-top: 10px;    

    width: 85%;

    p {
        font-size: 13px;
    }

`;

const Example = styled.div`
    width: 26px;
    height: 26px;

    border: 1px solid;
    border-color: ${props => props.borderColor};

    background-color: ${props => props.color};

    border-radius: 50%;

`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 85%;

    margin-top: 40px;

    input {
        width: 310px;
        height: 50px;

        padding: 6px;

        border: 1px solid #D4D4D4;;
        border-radius: 5px;

        font-size: 18px;
    }

    input::placeholder {
        font-style: italic;
    }

    h2 {
        margin-top: 10px;
        margin-bottom: 5px;
        font-size: 18px;
    }
`;

const SubmitButton = styled.button`
    display: flex;
        align-items: center;
        justify-content: center;

        width: 225px;
        height: 45px;

        margin-top: 30px;

        border-radius: 10px;

        background-color: #E8833A;
        color: #FFFFFF;
`