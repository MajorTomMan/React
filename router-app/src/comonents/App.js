import React from 'react';
import { Routes,Route,useNavigate} from 'react-router-dom';
import {
    Home,
    About,
    Events,
    Products,
    Contact,
    Whoops404,
    Services,
    History,
    Location,
} from "./Page"



export default function App(){
    let Navigate=useNavigate()
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />}>
                    <Route path="services" element={<Services />} />
                    <Route path="history" element={<History />} />
                    <Route path="location" element={<Location />} />
                </Route>
                <Route path="/events" element={<Events />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Whoops404 />} />
            </Routes>
        </div>
    )
}
