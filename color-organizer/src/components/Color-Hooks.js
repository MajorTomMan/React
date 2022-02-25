import React,{createContext,useState,useContext} from "react";
import {v4} from "uuid"
import ColorData from "../data/color-data.json"

/* 自定义钩子 */
const ColorContext=createContext();
export const useColors=()=>useContext(ColorContext);
/* 负责传递组件中的状态 */
export default function ColorProvider({childen}){
    const [colors,setColors]=useState(ColorData);
    const addColor=(title,color)=>setColors(
        [
            ...color,
            {
                id:v4(),
                rating:0,
                title,
                color 
            }
        ]
    );
    const rateColor=(id,rating)=>setColors(
        colors.map(color=>(
            color.id===id
            ?
            {
                ...color,
                rating
            }
            :
            color
            )
        )
    )
    const removeColor=id=>setColors(
        colors.filter(
            color=>color.id!==id
        )
    );
    return (
    <ColorContext.Provider value={{colors,addColor,removeColor,rateColor}}>
        {childen}
    </ColorContext.Provider>
    );
}
