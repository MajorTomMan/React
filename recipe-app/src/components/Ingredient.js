import React from "react"


/* 显示配料和定量 */
export default function Ingredient({amount,measurement,name}) {
    return (
        <li>
            {amount}{measurement}{name}
        </li>
    );
}

