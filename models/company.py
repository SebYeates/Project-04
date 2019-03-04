from app import db, ma
from marshmallow import fields
from sqlalchemy.orm import backref
from .base import BaseModel, BaseSchema

class Company(db.Model, BaseModel):

    __tablename__ = 'companies'

    name = db.Column(db.String(60), nullable=False)
    description = db.Column(db.Text, nullable=False)
    image = db.Column(db.String(200), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    lat = db.Column(db.Float, nullable=False)
    lng = db.Column(db.Float, nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref=backref('company', uselist=False))


class CompanySchema(ma.ModelSchema, BaseSchema):

    courses = fields.Nested('CourseSchema', many=True, exclude=('company',))
    user = fields.Nested('UserSchema', only=('id', 'username'))


    class Meta:
        model = Company
