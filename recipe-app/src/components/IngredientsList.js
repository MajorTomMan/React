import React from "react"
import Ingredient from './Ingredient'

/* 导入Ingredient组件用于显示各个配料,配料以数组的形式通过list属性传入组件,list数组中的每个配料都被映射到Ingredient组件上 */
export default function IngredientsList({list=[]}){
    return (
        <ul className='ingredients'>
            {
                list.map(
                    (ingredient,i)=>(<Ingredient key={i} {...ingredient} />)
                )
            }
        </ul>
    );
}

