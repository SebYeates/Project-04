/* global api, describe, it, beforeEach, after, expect */

const Course = require('../../models/course')
const User = require('../../models/user')

const { coursesData } = require('../mock_data')

describe('GET /courses', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Course.remove({})
    ])
      .then(() => Course.create(coursesData))
      .then(() => done())
  })

  it('should return a 200 response', (done) => {
    api.get('/api/courses')
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  it('should return an array', (done) => {
    api.get('/api/courses')
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        res.body.forEach(course => {
          expect(course).to.include.keys([
            'name',
            'image',
            'description',
            'category',
            'location',
            'address'
          ])
        })
        done()
      })
  })

  // it('should return the correct data', (done) => {
  //   api
  //     .get('/api/courses')
  //     .end((err, res) => {
  //       res.body.forEach((course, i) => {
  //         expect(course.name).to.eq(coursesData[i].name)
  //         expect(course.image).to.eq(coursesData[i].image)
  //         expect(course.description).to.eq(coursesData[i].description)
  //         expect(course.category).to.eq(coursesData[i].category)
  //         expect(course.location).to.deep.eq(coursesData[i].location)
  //         expect(course.address).to.eq(coursesData[i].address)
  //       })
  //       done()
  //     })
  // })


  after(done => {
    Course.remove({})
      .then(() => done())
  })
})
