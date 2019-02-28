from app import app, db
from models.user import User, UserSchema
from models.course import Course
from models.company import Company

user_schema = UserSchema()


with app.app_context():
    db.drop_all()
    db.create_all()

    user1, errors = user_schema.load({
        'username': 'user1',
        'email': 'user1@test.com',
        'password': 'password',
        'password_confirmation': 'password'
    })

    if errors:
        raise Exception(errors)

    db.session.add(user1)

    user2, errors = user_schema.load({
        'username': 'user2',
        'email': 'user2@test.com',
        'password': 'password',
        'password_confirmation': 'password'
    })

    if errors:
        raise Exception(errors)

    db.session.add(user2)

    first = Course(
        name='Things to learn',
        description='This a text description',
        image='croydoncourse.png',
        location='',
        address=''
        )
    db.session.add(first)

    second = Course(
        name='Things to learn',
        description='This a text description',
        image='croydoncourse.png',
        location='',
        address=''
        )
    db.session.add(second)

    thrird = Course(
        name='Things to learn',
        description='This a text description',
        image='croydoncourse.png',
        location='',
        address=''
    )
    db.session.add(thrird)


    sailcroydon = Company(
        name="Welcome to this company",
        description="This a text description",
        image='croydoncourse.png',
        address='London',
        location='Also London',
        courses=[second],
        user=user1
    )
    db.session.add(sailcroydon)

    saillondon = Company(
        name="Welcome to this company",
        description="This a text description",
        image='croydoncourse.png',
        address='London',
        location='Also London',
        courses=[thrird],
        user=user2
    )
    db.session.add(saillondon)


    db.session.commit()
