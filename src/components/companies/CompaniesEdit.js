import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'

import CompaniesForm from './CompaniesForm'

class CompaniesEdit extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {},
      errors: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleMultiChange = this.handleMultiChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value } }) {
    const data = {...this.state.data, [name]: value }
    const errors = { ...this.state.errors, [name]: '' }
    this.setState({ data, errors })
  }

  handleMultiChange(e) {
    const courses = e.map(course => course.value)
    const data = {...this.state.data, courses: courses }
    const errors = { ...this.state.errors, courses: '' }
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.data)
    axios
      .put(`/api/companies/${this.props.match.params.id}`, this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.props.history.push('/companies'))
      .catch((err) => this.setState({errors: err.response.data}))
  }

  componentDidMount() {
    axios
      .get(`/api/companies/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))

    axios.get('/api/courses')
      .then(res => {
        const options = res.data.map(course => {
          return {'value': course.id, 'label': course.name}
        })
        this.setState({ options })
      })
  }

  render() {
    return(
      <div className="section">
        <CompaniesForm
          data={this.state.data}
          errors={this.state.errors}
          options = {this.state.options}
          handleChange={this.handleChange}
          handleMultiChange={this.handleMultiChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default CompaniesEdit
