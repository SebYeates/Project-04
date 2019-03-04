import React from 'react'
import axios from 'axios'
import CompanyCard from './CompanyCard'
import CompaniesSearchForm from './CompaniesSearchForm'

class CompaniesIndex extends React.Component {

  constructor() {
    super()
    this.state = {
      companies: [],
      location: '',
      category: 'All'
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get('/api/companies')
      .then(res => this.setState({ companies: res.data }))
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value })
    console.log(this.state)
  }

  filteredCompanies() {
    const re = new RegExp(this.state.location, 'i')
    if(!this.state.category && !this.state.location) return this.state.companies
    return this.state.companies.filter(company => {
      return re.test(company.address) && (this.state.category === 'All' || company.category === this.state.category)
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
            {this.filteredCompanies().map(company =>
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
