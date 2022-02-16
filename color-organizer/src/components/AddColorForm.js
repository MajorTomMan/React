import React from "react";
import { useInput } from "./useInput";
import { useColors } from "./Color-Hooks";

/* 受控组件 增加颜色表单 使用title,color来接受输入框的值 */

export default function AddColorForm(){
    const [titleProps,resetTitle]=useInput("");
    const [colorProps,resetColor]=useInput("#000000")
    const {addColor}=useColors();
    const submit=event=>{
        event.preventDefault(); //阻止浏览器使用post请求
        addColor(titleProps.value,colorProps.value)
        resetColor();
        resetTitle();
    };
    return (
        <form onSubmit={submit}>
            <input 
                {...titleProps}
                type="text"
                placeholder="color title..." 
                required
            />

            <input 
                {...colorProps}
                type="color" 
                required
            />
            <button>ADD</button>
        </form>
    );
}

