import React from 'react'
import axios from 'axios'

import Map from '../common/Map'
import Auth from '../../lib/Auth'

import {Link} from 'react-router-dom'

class CompanysShow extends React.Component {
  constructor(){
    super()

    this.state = {
      company: null,
      userLocation: null,
      data: {}
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(){
    axios
      .delete(`/api/companys/${this.props.match.params.id}`,{
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => {
        this.props.history.push('/companys')
      })
      .catch(err => console.log(err))
  }


  componentDidMount() {
    axios.get(`/api/companys/${this.props.match.params.id}`)
      .then(res => this.setState({ company: res.data }))

    // also get the user location...
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          userLocation: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        })
      })
    }

  }

  render(){
    if(!this.state.company) return null
    const { _id, name, image, description, user, courses } = this.state.company
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1 is-title-light"> {name} </h1>
          <hr />
          <div className="columns is-variable is-5">
            <div className="column">
              <figure className="image">
                <img src={image} alt={name} />
              </figure>
              <div className="added-by">
                <Link to={`/user/${user._id}`} className="title is-5 is-title-light">
                  Added by: {user.username}<img  className="user-logo" src={user.image} alt={user.username} />
                </Link>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <h4 className="title is-4">Description:</h4>
                <p> {description}</p>
                <h4 className="title is-4">Courses:</h4>
                <div>
                  {courses.map((course, index) =>
                    <Link to={`/courses/${course._id}`} className="button pill is-rounded" key={index}> {course.name} </Link>
                  )}
                  <hr/>
                </div>
                {Auth.canEdit(user._id) && (
                  <div >
                    <Link to={`/companys/${_id}/edit`} className="button is-dark is-rounded" >Edit </Link>
                    <button className="button is-primary is-rounded " onClick={this.handleDelete}>Delete</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <hr />
          <div className="columns is-variable is-5">
            <div className="column">
              <div className="content">
                <Map
                  courses={courses}
                  userLocation={this.state.userLocation}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default CompanysShow
