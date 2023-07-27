import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import{BrowserRouter}from"react-router-dom";
import { CartProvider, useCart } from "react-use-cart";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <App />
    </>    
);

// import {hydrateRoot} from 'react-dom';

// hydrateRoot(document, <App assets={window.assetManifest} />);