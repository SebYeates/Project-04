import React from 'react'

const CoursesForm = ({ handleChange }) => {

  return (

    <div className="field">
      <div className="control courseFormDiv is-flex">
        <label className="label is-searchform"> <strong> Explore by category </strong> </label>
        <div className="select is-rounded">
          <select
            name="category"
            onChange={handleChange}
          >
            <option> All </option>
            <option> Sail Cruising </option>
            <option> Motor Cruising </option>
            <option> Navigation & Seamanship Theory </option>
            <option> Specialist Short Courses </option>
            <option> Powerboat </option>
            <option> Dinghy, Multihull & Small Keelboats </option>
            <option> Windsurfing </option>
            <option> Inland Waterways </option>
            <option> Certificates of Competence </option>
            <option> Take courses online </option>
          </select>
        </div>
        <div className="field">
          <div className="control is-flex">
            <label className="label is-searchform"> <strong> Search By City </strong> </label>
            <form>
              <input name="location" className="input searchBar is-rounded" type="text" placeholder="Location" onChange={handleChange} />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesForm
