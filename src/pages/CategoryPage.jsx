import React from 'react'
import { useParams } from "react-router-dom";

const CategoryPage = () => {
     const { category } = useParams();
  return (
     <div className="p-6 pt-24 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-heading mb-4">
        {category.charAt(0).toUpperCase() + category.slice(1)} Providers
      </h1>
      <p className="text-muted">
        This page will later show all service providers in the "{category}" category.
      </p>

      {/* Later: Map real provider cards here */}
    </div>
   
  )
}

export default CategoryPage