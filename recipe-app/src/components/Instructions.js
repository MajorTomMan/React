import React from "react"

/* 传入操作说明的标题和步骤 */
export default function Instructions ({ title = "untitled", steps = []}){
    return (
        <section className="Instructions">
            <h2>{title}</h2>
            {
                steps.map((s,i)=>(
                    <p key={i}>{s}</p>
                ))
            }
        </section>
    );
}

