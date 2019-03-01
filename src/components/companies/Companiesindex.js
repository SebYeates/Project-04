import React from 'react'
import axios from 'axios'
import CompanyCard from './CompanyCard'
import CompaniesSearchForm from './CompaniesSearchForm'

class CompaniesIndex extends React.Component {

  constructor() {
    super()
    this.state = {
      companies: []
    }
  }

  componentDidMount() {
    axios.get('/api/companies')
      .then(res => this.setState({ companies: res.data }))
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  filteredCompanies() {
    const re = new RegExp(this.state.location, 'i')
    if(!this.state.category && !this.state.location) return this.state.courses
    return this.state.courses.filter(course => {
      return re.test(course.address) && (this.state.category === 'All' || course.category === this.state.category)
    })
  }

  render() {

    if(!this.state.companies) return (
      <section className="section">
        <div className="container">
          <h4 className="title is-4">Loading...</h4>
        </div>
      </section>
    )

    return (
      <section className="section">
        <div className="container">
          <section className="section">
            <h2 className="title has-text-centered is-title-light is-size-2">The Companies</h2>
          </section>
          <hr />
          <CompaniesSearchForm handleChange={this.handleChange} />
          <div className="columns is-multiline">
            {this.state.companies.map(company =>
              <div key={company.id} className="column is-4">
                <CompanyCard {...company} />
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default CompaniesIndex
