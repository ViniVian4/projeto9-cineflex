import styled from 'styled-components';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Movie({ posterURL, id }) {
    return (
        <Link to={`/movie/${id}`}>
            <Container>
                <img src={posterURL} />
            </Container>
        </Link>
    )
}

const Container = styled.div`
    display: flex;
        align-items: center;
        justify-content: center;

        width: 150px;
        height: 210px;

        margin-bottom: 20px;

        box-shadow: 0 1px 5px rgb(102, 102, 102);
        border-radius: 5px;
    

    img {
        width: 130px;
        height: 193px;
    }

`