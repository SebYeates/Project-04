from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema


class Company(db.Model, BaseModel):

    __tablename__ = 'companys'

    name = db.Column(db.String(40), nullable=False)
    description = db.Column(db.String(200), nullable=False)
    image = db.Column(db.String(200), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    location = db.Column(db.String(80), nullable=False)
    courses = []

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref='companys')


class CompanySchema(ma.ModelSchema, BaseSchema):

    # courses = fields.Nested('CourseSchema', many=True, exclude=('company',))
    # user = fields.Nested('UserSchema', only=('id', 'username'))


    class Meta:
        model = Company
