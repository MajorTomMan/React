import React from "react";
import {FaStar} from "react-icons/fa"

const createArray=length=>[...Array(length)];


/* 渲染单个星标,根据selected的值填充相应的颜色 */
const Star=({selected=false,onSelect=f=>f})=>(
    <FaStar color={selected?"red":"grey"} onClick={onSelect}/>
);

 /*   提供用户为内容打分,给出心目中的星级数
      totalStars用于控制星星数量,默认是5
   */
export default function StarRating({selectedStars=0,totalStars=5,onRate=f=>f}){
    return (
    <>
        {createArray(totalStars).map(
            (n,i)=>(
            <Star key={i}
                  selected={selectedStars>i} 
                  onSelect={()=>onRate(i+1)}
            />)
        )}
        <p>
            {selectedStars} of {totalStars} stars
        </p>
    </>
    )
}


