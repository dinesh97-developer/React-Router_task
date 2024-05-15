import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Menu } from './component/Menu'
import { AllCom } from './component/AllCom'
import { FullStackDev } from './component/FullStackDev'
import { DataScience } from './component/DataScience'
import { CyberSecurity } from './component/CyberSecurity'
import { Career } from './component/Career';
import { Footer } from './component/Footer';


function App() {

    return (
        <BrowserRouter>
        <h1>Router task</h1>
            <Menu/>
            <Routes>
                <Route path="/" element={<AllCom />}></Route>
                <Route path="/fullStackDevelopment" element={<FullStackDev />}></Route>
                <Route path="/dataScience" element={<DataScience />}></Route>
                <Route path="/cyberSecurity" element={<CyberSecurity />}></Route>
                <Route path="/career" element={<Career />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>

    )
}

export default App


