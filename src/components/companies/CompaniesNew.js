import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'

import CompaniesForm from './CompaniesForm'



class CompaniesNew extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {},
      errors: ''
    }

    console.log('this.props', this.state.data)

    this.handleChange = this.handleChange.bind(this)
    // this.handleMultiChange = this.handleMultiChange.bind(this)
    this.suggestionSelect = this.suggestionSelect.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleChange({ target: { name, value } }) {
    const data = {...this.state.data, [name]: value }
    const errors = { ...this.state.errors, [name]: '' }
    this.setState({ data, errors })
  }


  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.data)
    axios
      .post('/api/companies', this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.props.history.push('/companies'))
      .catch((err) => this.setState({errors: err.response.data}))
  }

  componentDidMount() {
    axios.get('/api/courses')
      .then(res => {
        console.log(res)
        const options = res.data.map(course => {
          return {'value': course.id, 'label': course.name}
        })
        this.setState({ options })
      })
  }

  render() {
    return(
      <div className="section">
        <h3 className="title has-text-centered">Create Your Company</h3>
        <CompaniesForm
          data={this.state.data}
          errors={this.state.errors}
          options = {this.state.options}
          handleChange={this.handleChange}
          suggestionSelect={this.suggestionSelect}
          handleSubmit={this.handleSubmit}
        />
        <h3 className="has-text-centered"> Note: If you arleady added a company you can only Edit from your company show page.</h3>
      </div>
    )
  }
}

export default CompaniesNew
