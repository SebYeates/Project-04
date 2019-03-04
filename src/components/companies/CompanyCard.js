import React from 'react'
import { Link } from 'react-router-dom'

const CompanyCard = ({ id, name, image }) => {
  return (

    <Link to={`/companies/${id}`}>
      <div className="isImage thumbnail">
        <figure className="image is-4by3">
          <img src={image} alt={name} className="courseImage thumbnail"/>
          <div className="middle">
            <div className="text is-size-6">{name}</div>
            <p className="has-text-white">Click for Courses</p>
          </div>
        </figure>
      </div>

    </Link>
  )
}

export default CompanyCard
