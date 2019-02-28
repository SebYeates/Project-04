import React from 'react'
import axios from 'axios'

import Map from '../common/Map'
import Auth from '../../lib/Auth'

import {Link} from 'react-router-dom'

class CoursesShow extends React.Component {
  constructor(){
    super()

    this.state = {
      data: {},
      course: null,
      courses: null,
      userLocation: null
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(){
    axios
      .delete(`/api/courses/${this.props.match.params.id}`,{
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => {
        this.props.history.push('/courses')
      })
      .catch(err => console.log(err))
  }



  componentDidMount() {
    axios.get(`/api/courses/${this.props.match.params.id}`)
      .then(res => this.setState({ course: res.data }))

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
    if(!this.state.course) return null
    const { _id, name, image, category, description, user, location, companys } = this.state.course
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1 is-title-light"> {name} </h1>
          <hr />
          <div className="columns is-variable is-5">
            <div className="column">
              <figure className="image is-4by2">
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
                <h4 className="title is-4">Category: {category}</h4>
                <h4 className="title is-4">Description</h4>
                <p> {description}</p>
                <h4 className="title is-4">Companys</h4>
                {companys.map((company) => {
                  return <Link to={`/companys/${company._id}`} className="button pill is-rounded" key={company._id}> {company.name} </Link>
                })}
                <hr/>
                {Auth.canEdit(user._id) && (
                  <div>
                    <Link to={`/courses/${_id}/edit`} className="button is-dark is-rounded"> Edit </Link>
                    <button className="button is-dark is-rounded" onClick={this.handleDelete}> Delete </button>
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
                  location={location}
                  userLocation={this.state.userLocation}
                  courses={[this.state.course]}
                  type= "course"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    )
  }
}

export default CoursesShow
