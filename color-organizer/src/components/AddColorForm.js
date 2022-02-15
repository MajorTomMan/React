import React from "react";
import { useInput } from "./useInput";

/* 受控组件 增加颜色表单 使用title,color来接受输入框的值 */

export default function AddColorForm({onNewColor=f=>f}){
    const [titleProps,resetTitle]=useInput("");
    const [colorProps,resetColor]=useInput("#000000");
    const submit=event=>{
        event.preventDefault(); //阻止浏览器使用post请求
        onNewColor(titleProps.value,colorProps.value);
        resetTitle()
        resetColor()
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