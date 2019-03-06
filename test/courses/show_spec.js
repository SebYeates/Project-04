/* global api, describe, it, expect, beforeEach */

const Courses = require('../../models/course')
const User = require('../../models/user')

const { coursesData} = require('../mock_data')

let course

describe('GET /courses/:id', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Courses.remove({})
    ])
      .then(() => Courses.create(coursesData))
      .then(courses => course = courses[0])
      .then(() => done())
  })

  it('should return a 200 response', done => {
    api
      .get(`/api/courses/${course._id}`)
      .expect(200, done)
  })

  it('should return a course', done => {
    api
      .get(`/api/courses/${course._id}`)
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        expect(res.body).to.include.keys([
          'name',
          'image',
          'description',
          'category',
          'location',
          'address'
        ])
        done()
      })
  })

  it('should return the correct data', done => {
    api
      .get(`/api/courses/${course._id}`)
      .end((err, res) => {
        expect(res.body.name).to.eq(coursesData[0].name)
        expect(res.body.image).to.eq(coursesData[0].image)
        expect(res.body.location).to.deep.eq(coursesData[0].location)
        expect(res.body.description).to.eq(coursesData[0].description)
        expect(res.body.category).to.eq(coursesData[0].category)
        expect(res.body.address).to.eq(coursesData[0].address)
        done()
      })
  })
})
