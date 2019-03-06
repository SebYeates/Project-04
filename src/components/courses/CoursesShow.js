import React from 'react'
import axios from 'axios'

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
    const { id, name, image, category, description, company, start_date, end_date, address } = this.state.course
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
                <h4 className="title is-4">Category: <span className='subtitle is-6'> {category}</span></h4>
                <h4 className="title is-4">Start Date: <span className='subtitle is-6'> {start_date}</span></h4>
                <h4 className="title is-4">End Date: <span className='subtitle is-6'> {end_date}</span></h4>
                <h4 className="title is-4">Address:</h4>
                <p> {address}</p>
                <h4 className="title is-4">Company: </h4>
                <Link to={`/companies/${company.id}`} className="button pill is-rounded" key={company.id}> {company.name} </Link>
                <h4 className="title is-4">Description:</h4>
                <p> {description}</p>
                <hr/>
                {Auth.canEdit(company.user.id) && (
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
