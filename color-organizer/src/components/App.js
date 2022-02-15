import React, { useState } from 'react';
import colorData from "../data/color-data.json"
import ColorList from "./ColorList"
import AddColorForm from "./AddColorForm";
import {v4} from "uuid";


/* 位于根部的App 保存着用钩子勾起来的状态 */
export default function App(){
    const [colors,setColors]=useState(colorData);
    return (
        <>
            <AddColorForm 
                onNewColor={
                    (title,color)=>{
                    const newColors=[
                        ...colors,
                        {
                            id:v4(),
                            rating:0,
                            title,
                            color
                        }
                    ];
                    setColors(newColors);
                }
            }
            />
            <ColorList 
                colors={colors}
                onRateColor={
                    (id,rating)=>{
                        const newColors=colors.map(
                            color=>color.id===id?{...color,rating}:color)
                        setColors(newColors);
                    }
                }
                onRemoveColor={
                    id=>{
                        const newColors=colors.filter(
                            color=>color.id!==id)
                        setColors(newColors);
                    }
                }
            />
        </>
        );
}