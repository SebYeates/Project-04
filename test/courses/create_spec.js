/* global api, describe, it, beforeEach, expect */

const Course = require('../../models/course')
const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const {secret} = require('../../config/environment')

const { coursesData, userData } = require('../mock_data')

let token

describe('POST/courses', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Course.remove({})
    ])
      .then(() => User.create(userData))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' })
      })
      .then(done)
  })

  it('should return a 401 response', (done) => {
    api.post('/api/courses')
      .send(coursesData)
      .expect(401, done)
  })
  it('should return a 201 response', (done) => {
    api.post('/api/courses')
      .set('Authorization', `Bearer ${token}`)
      .send(coursesData[0])
      .expect(201, done)
  })

  it('should return the created course', (done) => {
    api.post('/api/courses')
      .set('Authorization', `Bearer ${token}`)
      .send(coursesData[0])
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        expect(res.body).to.include.keys([
          'name',
          'user',
          'image',
          'description',
          'category',
          'location',
          'address'
        ])
      })
    done()
  })


  it('should return the correct data', done => {
    api
      .post('/api/courses')
      .set('Authorization', `Bearer ${token}`)
      .send(coursesData[0])
      .end((err, res) => {
        expect(res.body.name).to.eq(coursesData[0].name)
        expect(res.body.image).to.eq(coursesData[0].image)
        expect(res.body.description).to.eq(coursesData[0].description)
        expect(res.body.category).to.eq(coursesData[0].category)
        expect(res.body.location).to.deep.eq(coursesData[0].location)
        expect(res.body.address).to.eq(coursesData[0].address)
        done()
      })
  })
})
