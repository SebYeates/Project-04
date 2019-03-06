import React from 'react'
import { Link } from 'react-router-dom'

const CourseCard = ({ id, name, image, address, start_date }) => {
  return (
    <Link to={`/courses/${id}`}>
      <div className="isImage">
        <figure className="image is-4by3">
          <img src={image} alt={name}  className="courseImage"/>
          <div className="middle">
            <div className="text">{name}</div>
            <div className="text">{start_date}</div>
          </div>
        </figure>
      </div>
    </Link>
  )
}

export default CourseCard
