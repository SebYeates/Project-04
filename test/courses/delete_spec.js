/* global api, describe, it, expect, beforeEach */

const Courses = require('../../models/course')
const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../../config/environment')

const { coursesData, userData } = require('../mock_data')

let token, course

describe('DELETE /courses/:id', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Courses.remove({})
    ])
      .then(() => Promise.props({
        courses: Courses.create(coursesData),
        user: User.create(userData)
      }))
      .then(data => {
        course = data.courses[0]
        token = jwt.sign({ sub: data.user._id }, secret, { expiresIn: '5m' })
      })
      .then(done)
  })

  it('should return a 401 response', done => {
    api
      .delete(`/api/courses/${course._id}`)
      .expect(401, done)
  })

  it('should return a 204 response with a token', done => {
    api
      .delete(`/api/courses/${course._id}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(204, done)
  })

  it('should return no data', done => {
    api
      .delete(`/api/courses/${course._id}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        expect(res.body).to.be.empty
        done()
      })
  })
})
