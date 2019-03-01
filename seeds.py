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
        name='This is first',
        description='This a text description',
        image='/assets/images/picNpgx.jpg',
        category='Sail Cruising',
        location='',
        address='',
        user=user1
        )
    db.session.add(first)

    second = Course(
        name='This is second',
        description='This a text description',
        image='/assets/images/images.jpg',
        category='Take courses online',
        location='',
        address='london',
        user=user1
        )
    db.session.add(second)

    thrird = Course(
        name='This is thrird',
        description='This a text description',
        image='/assets/images/picNpgx.jpg',
        category='Sail Cruising',
        location='',
        address='London',
        user=user2
    )
    db.session.add(thrird)


    sailcroydon = Company(
        name="Welcome to this company",
        description="This a text description",
        image='/assets/images/unnamed.jpg',
        address='London',
        location='Also London',
        courses=[second],
        user=user1
    )
    db.session.add(sailcroydon)

    saillondon = Company(
        name="Welcome to this company",
        description="This a text description",
        image='/assets/images/unnamed.jpg',
        address='London',
        location='Also London',
        courses=[thrird],
        user=user2
    )
    db.session.add(saillondon)


    db.session.commit()
