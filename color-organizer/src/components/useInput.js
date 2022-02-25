import { useState } from "react";



/* 自定义钩子 */ 
export const useInput=initialValue=>{
    const [value,setValue]=useState(initialValue); 
    return [
        {value,onChange:e=> setValue(e.target.value)},//Value:状态中的值,onChange函数用于修改状态值
        ()=>setValue(initialValue) //重置初始值
    ];
};

