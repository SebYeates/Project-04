from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema
# pylint: disable=W0611
from .user import User
from .company import Company

companys_courses = db.Table('companys_courses',
    db.Column('company_id', db.Integer, db.ForeignKey('companys.id'), primary_key=True),
    db.Column('course_id', db.Integer, db.ForeignKey('courses.id'), primary_key=True)
)

class Course(db.Model, BaseModel):

    __tablename__ = 'courses'

    title = db.Column(db.String(40), nullable=False)
    filename = db.Column(db.String(80), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref='courses')
    companys = db.relationship('Company', secondary=companys_courses, backref='courses')


class CourseSchema(ma.ModelSchema, BaseSchema):

    user = fields.Nested('UserSchema', exclude=('email', 'companys', 'courses'))
    companys = fields.Nested('CompanySchema', exclude=('courses',), many=True)

    class Meta:
        model = Course
