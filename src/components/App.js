import React from 'react';

import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartScreen from './StartScreen';

import TopBar from './TopBar';
import Sessions from './Sessions';

export default function App() {
    return (
        <>
            <Fonts/>
            <BrowserRouter>
            
                <TopBar/>

                <Routes>
                    <Route path="/" element={<StartScreen/>} />
                    <Route path="/movie/:id" element={<Sessions/>}/>
                </Routes>            
            
            </BrowserRouter>
        </>
        )
}

const Fonts = createGlobalStyle`
        h1 {
            font-family: 'Roboto', sans-serif;
        }
    `;