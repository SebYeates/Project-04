from flask import Blueprint, request, jsonify, g
from models.course import Course, CourseSchema
from lib.secure_route import secure_route

course_schema = CourseSchema()
courses_schema = CourseSchema(many=True)

api = Blueprint('courses', __name__)

@api.route('/courses', methods=['GET'])
def index():
    courses = Course.query.all()
    return courses_schema.jsonify(courses)

@api.route('/courses/<int:course_id>', methods=['GET'])
def show(course_id):
    course = Course.query.get(course_id)
    return course_schema.jsonify(course)

@api.route('/courses', methods=['POST'])
@secure_route
def create():

    course, errors = course_schema.load(request.get_json())

    if errors:
        return jsonify(errors), 422

    course.company = g.current_user.company

    if g.current_user.company is None:
        return jsonify({'message': 'You Need a Company to make Courses'}), 400

    course.save()

    return course_schema.jsonify(course)


@api.route('/courses/<int:course_id>', methods=['PUT'])
@secure_route
def update(course_id):

    course = Course.query.get(course_id)

    if course.company.user != g.current_user:
        return jsonify({'message': 'Unauthorized'}), 401

    course, errors = course_schema.load(request.get_json(), instance=course)

    if errors:
        return jsonify(errors), 422

    course.save()

    return course_schema.jsonify(course)

@api.route('/courses/<int:course_id>', methods=['DELETE'])
@secure_route
def delete(course_id):

    course = Course.query.get(course_id)

    if course.company.user != g.current_user:
        return jsonify({'message': 'Unauthorized'}), 401

    course.remove()

    return '', 204
