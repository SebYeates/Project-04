import React from 'react'

const CompaniesForm = ({ handleChange }) => {

  return (

    <div className="field">
      <div className="control courseFormDiv is-flex">
        <div className="field">
          <div className="control is-flex">
            <label className="label is-searchform"> <strong> Search By Location </strong> </label>
            <form>
              <input name="location" className="input searchBar is-rounded" type="text" placeholder="Location" onChange={handleChange} />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompaniesForm
