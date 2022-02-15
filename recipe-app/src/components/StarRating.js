import React,{useState} from "react";
import {FaStar} from "react-icons/fa"

const createArray=length=>[...Array(length)];


/* 渲染单个星标,根据selected的值填充相应的颜色 */
const Star=({selected=false,onSelect=f=>f})=>(
    <FaStar color={selected?"red":"grey"} onClick={onSelect}/>
);

 /*   提供用户为内容打分,给出心目中的星级数
      totalStars用于控制星星数量,默认是5
   */
export default function StarRating({style={},totalStars=5}){
    const [selectedStars,setSelectedStars]=useState(0); //selectedStars是状态变量,存储用户评定的分数
    return (
    <div style={{padding:"5px",...style}}>
        {createArray(totalStars).map(
            (n,i)=>(
            <Star key={i}
                  selected={selectedStars>i} 
                  onSelect={()=>setSelectedStars(i+1)}
            />)
        )}
        <p>
            {selectedStars} of {totalStars} stars
        </p>
    </div>
    )
}
