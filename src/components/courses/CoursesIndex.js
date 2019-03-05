import React from 'react'
import axios from 'axios'
import CourseCard from './CourseCard'
import CoursesSearchForm from './CoursesSearchForm'

class CoursesIndex extends React.Component {

  constructor() {
    super()
    this.state = {
      courses: [],
      category: 'All',
      userLocation: null,
      location: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get('/api/courses')
      .then(res => this.setState({ courses: res.data }))

    // also get the user location...
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log('LOCATION FOUND')
        this.setState({
          userLocation: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        })
      })
    }
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  filteredCourses() {
    const re = new RegExp(this.state.location, 'i')
    if(!this.state.category && !this.state.location) return this.state.courses
    return this.state.courses.filter(course => {
      return re.test(course.address) && (this.state.category === 'All' || course.category === this.state.category)
    })
  }

  render() {
    console.log(this.state)
    if(this.state.courses.length === 0){
      return(
        <section className="section">
          <div className="container">
            <h4 className="title is-4">Loading...</h4>
          </div>
        </section>
      )
    }
    return (

      <section className="section">
        <div className="container">
          <section className="section">
            <h2 className="title has-text-centered is-title-light is-size-2">Search Courses</h2>
          </section>
          <hr />
          <CoursesSearchForm handleChange={this.handleChange} />
          <div className="columns is-multiline">
            {this.filteredCourses().map(course =>
              <div key={course.id} className="column is-one-quarter">
                <CourseCard {...course} />
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default CoursesIndex
