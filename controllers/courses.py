from flask import Blueprint, request, jsonify
from models.course import Course, CourseSchema

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
def create():

    course, errors = course_schema.load(request.get_json())

    if errors:
        return jsonify(errors), 422

    course.save()

    return course_schema.jsonify(course)


@api.route('/courses/<int:course_id>', methods=['PUT'])
def update(course_id):

    course = Course.query.get(course_id)
    course, errors = course_schema.load(request.get_json(), instance=course)

    if errors:
        return jsonify(errors), 422

    course.save()

    return course_schema.jsonify(course)

@api.route('/courses/<int:course_id>', methods=['DELETE'])
def delete(course_id):

    course = Course.query.get(course_id)

    course.remove()

    return '', 204
