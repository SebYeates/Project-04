import React from 'react'
import axios from 'axios'

// import Map from '../common/Map'
import Auth from '../../lib/Auth'

import {Link} from 'react-router-dom'

class CoursesShow extends React.Component {
  constructor(){
    super()

    this.state = {
      data: {},
      course: null,
      userLocation: null,
      message: 'heya'
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
      .then(() => console.log(this.state))



      // .then((res) => console.log('RES ----->', res.data))
    // console.log('HETERET',this.props.match.params.id)s

  }

  render(){
    if(!this.state.course) {
      console.log('this.state.course', this.state.course)
      return null

    }
    console.log('this.state.course', this.state)
    const { id, name, image, category, description, user, company } = this.state.course
    console.log(description)
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
            </div>
            <div className="column">
              <div className="content">
                <h4 className="title is-4">Category: {category}</h4>
                <h4 className="title is-4">Description</h4>
                <p> {description}</p>
                <h4 className="title is-4">Company</h4>
                <Link to={`/companies/${company.id}`} className="button pill is-rounded" key={company.id}> {company.name} </Link>

                <hr/>
                {Auth.canEdit(user.id) && (
                  <div>
                    <Link to={`/courses/${id}/edit`} className="button is-dark is-rounded"> Edit </Link>
                    <button className="button is-dark is-rounded" onClick={this.handleDelete}> Delete </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default CoursesShow
