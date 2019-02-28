import React from 'react'
import axios from 'axios'
import CompanyCard from './CompanyCard'
// import CompanysSearchForm from './CompanysSearchForm'

class CompanysIndex extends React.Component {

  constructor() {
    super()
    this.state = {
      companys: []
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    axios.get('/api/companys')
      .then(res => this.setState({ companys: res.data }))
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  filteredCompanys() {
    const re = new RegExp(this.state.location, 'i')
    if(!this.state.category && !this.state.location) return this.state.courses
    return this.state.courses.filter(course => {
      return re.test(course.address) && (this.state.category === 'All' || course.category === this.state.category)
    })
  }

  render() {

    if(!this.state.companys) return (
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
            <h2 className="title has-text-centered is-title-light is-size-2">The Companys</h2>
          </section>
          <hr />
          <div className="columns is-multiline">
            {this.state.companys.map(company =>
              <div key={company._id} className="column is-4">
                <CompanyCard {...company} />
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default CompanysIndex
