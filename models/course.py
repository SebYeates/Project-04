from datetime import datetime
from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema
# pylint: disable=W0611


class Course(db.Model, BaseModel):

    __tablename__ = 'courses'

    name = db.Column(db.String(60), nullable=False)
    description = db.Column(db.Text, nullable=False)
    image = db.Column(db.String(200), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    lat = db.Column(db.Float, nullable=False)
    lng = db.Column(db.Float, nullable=False)
    category = db.Column(db.String(200), nullable=True)


    start_date = db.Column(db.String(60), nullable=True)
    end_date = db.Column(db.String(60), nullable=True)

    company_id = db.Column(db.Integer, db.ForeignKey('companies.id'))
    company = db.relationship('Company', backref='courses')

class CourseSchema(ma.ModelSchema, BaseSchema):

    company = fields.Nested('CompanySchema', exclude=('courses',))


    class Meta:
        model = Course
