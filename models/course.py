from datetime import datetime
from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema
# pylint: disable=W0611


class Course(db.Model, BaseModel):

    __tablename__ = 'courses'

    name = db.Column(db.String(40), nullable=False)
    description = db.Column(db.String(200), nullable=False)
    image = db.Column(db.String(200), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    location = db.Column(db.String(200), nullable=False)
    category = []
    company = []

    start_date = db.Column(db.DateTime, default=datetime.utcnow)
    end_date = db.Column(db.DateTime, default=datetime.utcnow)

    # company_id = db.Column(db.Integer, db.ForeignKey('company.id'))
    # company = db.relationship('Company', backref='courses')


class CourseSchema(ma.ModelSchema, BaseSchema):

    company = fields.Nested('CompanySchema')


    class Meta:
        model = Course
