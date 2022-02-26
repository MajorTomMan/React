import React from 'react';
import ColorList from "./ColorList"
import AddColorForm from "./AddColorForm";
import { Routes,Route } from 'react-router-dom';
import { ColorDetails } from "./ColorDetails";
import ColorProvider from './Color-Hooks';

/* 位于根部的App 保存着用钩子勾起来的状态 */
export default function App(){
    return (
        <ColorProvider>
            <AddColorForm />
            <Routes>
                <Route path="/" element={<ColorList />} />
                <Route path=":id" element={<ColorDetails />} />
            </Routes>
        </ColorProvider>
    );
}
