import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

import DayHabits from './components/DayHabits';
import Habits from "./components/Habits";
import Historic from './components/Historic';
import Today from './components/Today';

import Provider from './context/Provider';

import Application from './routes/Application';
import Login from './routes/Login';
import Register from './routes/Register';

import Global from "./styles/Global";
import Reset from "./styles/Reset";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider>
            <HashRouter>
                <Reset></Reset>
                <Global></Global>
                <Routes>
                    <Route path="/" element={<Login></Login>}></Route>
                    <Route path="/cadastro" element={<Register></Register>}></Route>
                    <Route path="/habitos" element={<Application><Habits></Habits></Application>}></Route>
                    <Route path="/hoje" element={<Application><Today></Today></Application>}></Route>
                    <Route path="/historico" element={<Application><Historic></Historic></Application>}></Route>
                    <Route path="/habitos-dia" element={<Application><DayHabits></DayHabits></Application>}></Route>
                </Routes>
            </HashRouter>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
