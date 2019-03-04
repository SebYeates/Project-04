import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'

import {Link} from 'react-router-dom'

class CompaniesShow extends React.Component {
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
      .delete(`/api/companies/${this.props.match.params.id}`,{
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => {
        this.props.history.push('/companies')
      })
      .catch(err => console.log(err))
  }


  componentDidMount() {
    axios.get(`/api/companies/${this.props.match.params.id}`)
      .then(res => this.setState({ company: res.data }))

  }

  render(){
    if(!this.state.company) return null
    const { id, name, image, description, user, courses, address } = this.state.company
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
            </div>
            <div className="column">
              <div className="content">
                <h4 className="title is-4">Description:</h4>
                <p> {description}</p>
                <h4 className="title is-4">Address:</h4>
                <p> {address}</p>
                <h4 className="title is-4">Courses:</h4>
                <div>
                  {courses.map((course, index) =>
                    <Link to={`/courses/${course.id}`} className="button pill is-rounded" key={index}> {course.name}  </Link>
                  )}
                  <hr/>
                </div>
                {Auth.canEdit(user.id) && (
                  <div >
                    <Link to={`/companies/${id}/edit`} className="button is-dark is-rounded" >Edit </Link>
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
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default CompaniesShow
