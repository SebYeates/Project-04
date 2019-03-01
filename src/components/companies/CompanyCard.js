import React from 'react'
import { Link } from 'react-router-dom'

const CompanyCard = ({ id, name, image, category, courses }) => {
  return (

    <Link to={`/companies/${id}`}>
      <div className="isImage thumbnail">
        <figure className="image is-4by3">
          <img src={image} alt={name} className="courseImage thumbnail"/>
          <div className="middle">
            <div className="text is-size-6">{name}</div>
            <p className="has-text-white">Included Courses</p>
            {courses.map((course, i)=> {
              return  <button className="companyBtn" key={i}> {course.name} </button>
            }
            )}
            <div className="text">{category}</div>
          </div>
        </figure>
      </div>

    </Link>
  )
}

export default CompanyCard
