import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {

  return (

    <section>
      <div>
        <ul className="slideshow">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Link className="hoverWrapper" to={'/companies'}><button className="button homesecond is-medium thumbnail"> Find A RYA Sailing School <i className="fas  homepage"></i> </button></Link>
        <div className="hoverShow"><span> Find A RYA Sailing School </span></div>
        <Link className="hoverWrapper" to = {'/courses'}><button className="button home is-medium"> Find Courses <i className="far fa-course homepage"></i>  </button></Link>
        <div className="hoverShow"><span> Discover Courses </span></div>
      </div>
    </section>
  )
}


export default Home
