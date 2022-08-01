import React from 'react';
import styled from 'styled-components';

export default function TopBar() {
    return (
        <Container> <h1>CINEFLEX</h1> </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 70px;

    position: fixed;
    top: 0;
    left: 0;

    font-size: 34px;

    color: #E8833A;

    background-color: #C3CFD9;
`