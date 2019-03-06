/* global api, describe, it, expect, beforeEach */

const Courses= require('../../models/course')
const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../../config/environment')

const { coursesData, userData } = require('../mock_data')

let token, course

describe('PUT /courses/:id', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Courses.remove({})
    ])
      .then(() => Promise.props({
        course: Courses.create(coursesData[0]),
        user: User.create(userData)
      }))
      .then(data => {
        course = data.course
        token = jwt.sign({ sub: data.user._id }, secret, { expiresIn: '5m' })
      })
      .then(done)
  })

  it('should return a 401 response', done => {
    api
      .put(`/api/courses/${course._id}`)
      .expect(401, done)
  })

  it('should return a 200 response with a token', done => {
    api
      .put(`/api/courses/${course._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send(coursesData[0])
      .expect(200, done)
  })

  it('should return a course', done => {
    api
      .put(`/api/courses/${course._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send(coursesData[0])
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        expect(res.body).to.include.keys([
          '_id',
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
      .put(`/api/courses/${course._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send(coursesData[0])
      .end((err, res) => {
        expect(res.body.name).to.eq(coursesData[0].name)
        expect(res.body.image).to.eq(coursesData[0].image)
        expect(res.body.description).to.deep.eq(coursesData[0].description)
        expect(res.body.category).to.eq(coursesData[0].category)
        expect(res.body.location).to.deep.eq(coursesData[0].location)
        expect(res.body.address).to.eq(coursesData[0].address)
        done()
      })
  })
})
