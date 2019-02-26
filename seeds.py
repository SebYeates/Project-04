from app import app, db
from models.user import User
from models.course import Course
from models.company import Company

with app.app_context():
    db.drop_all()
    db.create_all()

    test = User(username='test', email='test@gmail.com')
    test.save()

    things_to_do = Course(title="Things to learn", filename='croydon.course', user=test)
    things_to_do.save()

    croydon = Company(title='Croydon', user=test, course=[things_to_do])
    croydon.save()
