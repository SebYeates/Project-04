import React from 'react'
import { Link } from 'react-router-dom'

const CourseCard = ({ _id, name, image, address }) => {
  return (
    <Link to={`/courses/${_id}`}>
      <div className="isImage">
        <figure className="image is-4by3">
          <img src={image} alt={name}  className="courseImage"/>
          <div className="middle">
            <div className="text">{name}</div>
            <div className="text">{address}</div>
          </div>
        </figure>
      </div>
    </Link>
  )
}

export default CourseCard
