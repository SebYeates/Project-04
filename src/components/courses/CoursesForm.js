import React from 'react'
import MapboxAutocomplete from 'react-mapbox-autocomplete'
import ReactFilestack from 'react-filestack'

const fileStack = process.env.FILESTACK_API_KEY


const CoursesForm = ({ data, handleChange, handleSubmit, errors, suggestionSelect  }) => {
  return (
    <div className="container">
      <div className="column is-6 is-offset-3 ">
        <div className="box">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                  value={data.name || ''}
                />
                {errors.name && <small className="help is-danger">{errors.name}</small>}
              </div>
            </div>
            <div className="field">
              <label className="label">Start Date</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Start Date"
                  name="start_date"
                  onChange={handleChange}
                  value={data.start_date || ''}
                />
                {errors.start_date && <small className="help is-danger">{errors.start_date}</small>}
              </div>
            </div>
            <div className="field">
              <label className="label">End Date</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="End date"
                  name="end_date"
                  onChange={handleChange}
                  value={data.end_date || ''}
                />
                {errors.end_date && <small className="help is-danger">{errors.end_date}</small>}
              </div>
            </div>
            <div className="field">
              <label className="label">Image</label>
              <div className="control">
                <ReactFilestack
                  apikey={`${fileStack}`}
                  mode={'pick'}
                  onSuccess={(res) => {
                    handleChange({
                      target: {
                        name: 'image',
                        value: res.filesUploaded[0].url
                      }})
                  }}
                  onError={(err) => console.log(err)}
                  buttonText={'Upload Image'}
                  buttonClass={'button is-dark is-rounded'}
                />
                {data.image &&<small> Imaged Uploaded</small>}
                <br/>
                {errors.image && <small className="help is-danger">{errors.image}</small>}
              </div>
            </div>
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Description"
                  name="description"
                  onChange={handleChange}
                  value={data.description || ''}
                />
                {errors.description && <small className="help is-danger">{errors.description}</small>}
              </div>
            </div>
            <div className="field">
              <label className="label">Category</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select
                    name="category"
                    defaultValue="Please Choose..."
                    onChange={handleChange}
                    value={data.category}
                  >
                    <option disabled>Please Choose...</option>
                    <option value="" > Search All </option>
                    <option> Sail Cruising </option>
                    <option> Motor Cruising </option>
                    <option> Navigation & Seamanship Theory </option>
                    <option> Powerboat </option>
                    <option> Dinghy, Multihull & Small Keelboats </option>
                    <option> Windsurfing </option>
                    <option> Inland Waterways </option>
                    <option> Specialist Short Courses </option>
                    <option> Certificates of Competence </option>
                    <option> Take courses online </option>
                  </select>
                </div>
                {errors.category && <small className="help is-danger">{errors.category}</small>}
              </div>
            </div>
            <label className="label">Location</label>
            <div className="control">
              <MapboxAutocomplete
                publicKey={process.env.MAP_BOX_TOKEN}
                inputClass="input"
                onSuggestionSelect={suggestionSelect}
                resetSearch={false}
                onchange={handleChange}
                name="location"
                value={data.address}
              />
              {errors.location && <small>{errors.location}</small>}
            </div>
            <div>
              <button className="button is-rounded is-medium is-fullwidth is-primary course-form">Submit <i className="far fa-course homepage"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default CoursesForm
