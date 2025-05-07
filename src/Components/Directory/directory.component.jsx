import React from 'react'
// import component
import CategoryItem from '../categories/category.item.component'
import categories from './directory.data.component'
import "./directory.style.scss";

function Directory() {
  return (
    <div className="categories-container">
    {categories.map((category)=>(
      <CategoryItem key={category.id} category={category}/>
    ))}
  </div>
  )
}

export default Directory