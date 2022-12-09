import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FE02Typical from "~/components/FE02Typical/FE02Typical";
import StSoftware from "~/components/FE07_STSOFTWARE/Fe07_stsoftware";
import Fe07_stsoftware from "~/components/FE07_STSOFTWARE/Fe07_stsoftware";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<FE02Typical/>}/>
                <Route path="/Fe07_stsoftware" element={<Fe07_stsoftware />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
