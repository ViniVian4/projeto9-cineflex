import React from 'react';
import styled from 'styled-components';

import Movies from './Movies';

export default function StartScreen () {
    return (
        <>
            <Container>
                <h1>Selecione o filme</h1>
                <Movies/>
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

    h1 {
        color: #293845;
        font-size: 24px;
    }

`;