import React, { Fragment } from "react";
// import component
import CategoryItem from "../categories/category.item.component";
import categories from "./directory.data.component";
import "./directory.style.scss";
import { Outlet } from "react-router-dom";

function Directory() {
  return (
    <Fragment>
      <Outlet />
      <div className="categories-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </Fragment>
  );
}

export default Directory;
