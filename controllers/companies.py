from flask import Blueprint, request, jsonify, g
from models.company import Company, CompanySchema
from lib.secure_route import secure_route

company_schema = CompanySchema()
companies_schema = CompanySchema(many=True)

api = Blueprint('companies', __name__)

@api.route('/companies', methods=['GET'])
def index():
    companies = Company.query.all()
    return companies_schema.jsonify(companies)

@api.route('/companies/<int:company_id>', methods=['GET'])
def show(company_id):
    company = Company.query.get(company_id)
    return company_schema.jsonify(company)

@api.route('/companies', methods=['POST'])
@secure_route
def create():

    company, errors = company_schema.load(request.get_json())

    if errors:
        return jsonify(errors), 422

    company.user = g.current_user

    company.save()

    return company_schema.jsonify(company)

@api.route('/companies/<int:company_id>', methods=['PUT'])
@secure_route
def update(company_id):

    company = Company.query.get(company_id)

    if company.user != g.current_user:
        return jsonify({'message': 'Unauthorized'}), 401

    company, errors = company_schema.load(request.get_json(), instance=company)

    if errors:
        return jsonify(errors), 422

    company.save()

    return company_schema.jsonify(company)

@api.route('/companies/<int:company_id>', methods=['DELETE'])
@secure_route
def delete(company_id):

    company = Company.query.get(company_id)

    if company.user != g.current_user:
        return jsonify({'message': 'Unauthorized'}), 401

    company.remove()

    return '', 204
