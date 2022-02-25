import React from 'react';
import ColorList from "./ColorList"
import AddColorForm from "./AddColorForm";


/* 位于根部的App 保存着用钩子勾起来的状态 */
export default function App(){
    return (
        <>
            <AddColorForm />
            <ColorList />
        </>
    );
}
