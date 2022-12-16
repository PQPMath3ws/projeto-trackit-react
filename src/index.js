import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

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
            <BrowserRouter>
                <Reset></Reset>
                <Global></Global>
                <Routes>
                    <Route path="/" element={<Login></Login>}></Route>
                    <Route path="/cadastro" element={<Register></Register>}></Route>
                    <Route path="/habitos" element={<Application></Application>}></Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
