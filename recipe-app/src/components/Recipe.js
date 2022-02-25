import React from "react"
import IngredientsList from "./IngredientsList"
import Instructions from "./Instructions"

/* 显示菜谱名称和列出配料,显示操作说明 */


export default function Recipe({
  name = "untitled",
  ingredients = [],
  steps = [],
}) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <IngredientsList list={ingredients} />
      <Instructions title="Cooking Instructions" steps={steps} />
    </section>
  );
}
