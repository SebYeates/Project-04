import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'

import CoursesForm from './CoursesForm'


class CoursesEdit extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        image: '',
        description: '',
        lat: '',
        lng: '',
        address: ''
      },
      errors: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.suggestionSelect = this.suggestionSelect.bind(this)
  }

  handleChange({ target: { name, value } }) {
    if(name === 'location'){
      console.log('location')
    }

    const data = {...this.state.data, [name]: value }
    const errors = { ...this.state.errors, [name]: '' }
    this.setState({ data, errors })
  }

  suggestionSelect(result, lat, lng, text) {
    console.log(lat, lng)
    const data = {
      ...this.state.data,
      lat: lat,
      lng: lng,
      address: result,
      text
    }
    const errors = { ...this.state.errors, lat: '', lng: '' }

    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .put(`/api/courses/${this.props.match.params.id}`, this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.props.history.push('/courses'))
      .catch((err) => this.setState({ errors: err.response.data }))
  }

  componentDidMount(){
    axios
      .get(`/api/courses/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
  }

  render() {
    return(
      <div className="section">
        <CoursesForm
          data={this.state.data}
          errors={this.state.errors}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          suggestionSelect={this.suggestionSelect}
        />
      </div>
    )
  }
}

export default CoursesEdit
