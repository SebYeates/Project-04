from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema

class User(db.Model, BaseModel):

    __tablename__ = 'users'

    username = db.Column(db.String(40), nullable=False)
    email = db.Column(db.String(80), nullable=False)


class UserSchema(ma.ModelSchema, BaseSchema):

    courses = fields.Nested('CourseSchema', many=True, exclude=('user', ))
    companys = fields.Nested('CompanySchema', many=True, exclude=('user', 'courses'))

    class Meta:
        model = User
