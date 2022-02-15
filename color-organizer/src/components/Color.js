import React from "react";
import StarRating from "./StarRating";
import {FaTrash} from "react-icons/fa"
/* 显示数据中各个属性,并且负责渲染垃圾桶图标和传递状态给StarRating组件,实现按钮的交互时间*/

export default function Color({id,title,color,rating,onRemove=f=>f,onRate=f=>f}){
    return (
        <section>
            <h1>
                {title}
            </h1>
            <button onClick={()=>onRemove(id)}>
                <FaTrash />
            </button>
            <div style={{height:50,backgroundColor:color}} />
            <StarRating selectedStars={rating} onRate={rating=>onRate(id,rating)}/>
        </section>
    );
}