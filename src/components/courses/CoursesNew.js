import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'
import CoursesForm from './CoursesForm'

class CoursesNew extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        image: '',
        description: '',
        address: '',
        lat: 51.5327045,
        lng: -0.1507498
      },
      errors: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.suggestionSelect = this.suggestionSelect.bind(this)
  }

  handleChange({ target: { name, value } }) {
    const data = {...this.state.data, [name]: value }
    const errors = { ...this.state.errors, [name]: '' }
    this.setState({ data, errors })
  }

  suggestionSelect(result, lat, lng) {
    const data = {
      ...this.state.data,
      lat: lat,
      lng: lng,
      address: result
    }
    const errors = { ...this.state.errors, lat: '', lng: '' }

    this.setState({data, errors})
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('/api/courses', this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.props.history.push('/courses'))
      .catch((err) => {
        return this.setState({errors: err.response.data})
      })
  }

  componentDidMount() {
    // also get the user location...
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const data = {...this.state.data,
          location: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        }
        this.setState({ data })
      })
    }
  }
  render() {
    return(
      <div className="section">
        <h3 className="title has-text-centered">Add Your Course</h3>
        <CoursesForm
          data={this.state.data}
          errors={this.state.errors}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          suggestionSelect={this.suggestionSelect}
          location={location}
          userLocation={this.state.userLocation}
        />
        <h3 className="has-text-centered"> Note: You can Edit and Delete your Course from your Course show page.</h3>
      </div>
    )
  }
}

export default CoursesNew
