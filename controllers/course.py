from flask import Blueprint
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
