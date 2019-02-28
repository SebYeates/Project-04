from flask import Blueprint, request, jsonify
from models.company import Company, CompanySchema

company_schema = CompanySchema()
companys_schema = CompanySchema(many=True)

api = Blueprint('companys', __name__)

@api.route('/companys', methods=['GET'])
def index():
    companys = Company.query.all()
    return companys_schema.jsonify(companys)

@api.route('/companys/<int:company_id>', methods=['GET'])
def show(company_id):
    company = Company.query.get(company_id)
    return company_schema.jsonify(company)

@api.route('/companys', methods=['POST'])
def create():

    company, errors = company_schema.load(request.get_json())

    if errors:
        return jsonify(errors), 422

    company.save()

    return company_schema.jsonify(company)

@api.route('/companys/<int:company_id>', methods=['PUT'])
def update(company_id):

    company = Company.query.get(company_id)
    company, errors = company_schema.load(request.get_json(), instance=company)

    if errors:
        return jsonify(errors), 422

    company.save()

    return company_schema.jsonify(company)

@api.route('/companys/<int:company_id>', methods=['DELETE'])
def delete(company_id):

    company = Company.query.get(company_id)

    company.remove()

    return '', 204
