import React from 'react';
import Color from "./Color"


/* 通过属性从App处获取颜色,如果为空则显示一个消息,有内容时映射数组,把各颜色的详细信息继续向下传递给color组件 */

export default function ColorList({colors=[],onRemoveColor=f=>f,onRateColor=f=>f}){
    if(!colors.length){
        return (<div>
            No Colors Listed. (Add a Color )
        </div>)
    }
    return (<div>
        {
            colors.map( color =>(
                    <Color 
                        key={color.id} 
                        {...color} 
                        onRemove={onRemoveColor} 
                        onRate={onRateColor}
                    />
                )
            )
        };
    </div>)
}