from marshmallow import fields
from app import db, ma
from .base import BaseModel, BaseSchema

class Company(db.Model, BaseModel):

    __tablename__ = 'companys'

    title = db.Column(db.String(40), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref='companys')


class CompanySchema(ma.ModelSchema, BaseSchema):

    user = fields.Nested('UserSchema', exclude=('email', 'courses', 'companys'))
    courses = fields.Nested('CourseSchema', exclude=('companys', 'user'), many=True)

    class Meta:
        model = Company
