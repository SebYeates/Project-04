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

        <div className="hoverShow"><span> Find A RYA Sailing School </span></div>
        <div className="hoverShow"><span> Discover Courses </span></div>


        <div className="centred-buttons">
          <Link className="" to={'/companies'}><button className="button homesecond is-medium thumbnail"> Find A RYA Sailing School </button></Link>
          <Link className="" to = {'/courses'}><button className="button home is-medium"> Find Courses Near you</button></Link>
        </div>

      </div>
    </section>
  )
}


export default Home
