from flask import Blueprint, request, jsonify
from models.company import Company, CompanySchema

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
def create():

    company, errors = company_schema.load(request.get_json())

    if errors:
        return jsonify(errors), 422

    company.save()

    return company_schema.jsonify(company)

@api.route('/companies/<int:company_id>', methods=['PUT'])
def update(company_id):

    company = Company.query.get(company_id)
    company, errors = company_schema.load(request.get_json(), instance=company)

    if errors:
        return jsonify(errors), 422

    company.save()

    return company_schema.jsonify(company)

@api.route('/companies/<int:company_id>', methods=['DELETE'])
def delete(company_id):

    company = Company.query.get(company_id)

    company.remove()

    return '', 204
