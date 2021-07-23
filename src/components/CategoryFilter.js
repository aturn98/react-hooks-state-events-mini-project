import React from "react";
import { nanoid } from "nanoid";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  

  const createButtons = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null
    console.log(className)
    return (
      <button 
        key={nanoid()} 
        className={className} 
        onClick={() => setSelectedCategory(category)}
        >{category}
      </button>
    )
  })
    
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {createButtons}
    </div>
  );
}

export default CategoryFilter;
