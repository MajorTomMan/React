import React from "react";
import ReactDom from "react-dom";

import Menu from "./components/Menus";
import StarRating from "./components/StarRating";
import Data from "./data/recipes.json";


ReactDom.render(
  <Menu recipes={Data} />,document.getElementById("root")
);


ReactDom.render(
  <StarRating totalStars={10}/>,document.getElementById("root")
)