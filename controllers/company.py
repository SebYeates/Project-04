from flask import Blueprint
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
