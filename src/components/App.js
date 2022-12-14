import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartScreen from './StartScreen';

import TopBar from './TopBar';
import Sessions from './Sessions';
import ChosenSession from './ChosenSession';
import Sucess from './Sucess';

export default function App() {
    
    return (
        <>
            <BrowserRouter>
            
                <TopBar/>

                <Routes>
                    <Route path="/" element={<StartScreen/>} />
                    <Route path="/movie/:id" element={<Sessions/>}/>
                    <Route path="/session/:id" element={<ChosenSession />}/>
                    <Route path="/sucess" element={<Sucess />} />
                </Routes>            
            
            </BrowserRouter>
        </>
        )
}