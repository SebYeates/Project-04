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

    user3, errors = user_schema.load({
        'username': 'user3',
        'email': 'user3@test.com',
        'password': 'password',
        'password_confirmation': 'password'
    })

    if errors:
        raise Exception(errors)

    db.session.add(user3)

    user4, errors = user_schema.load({
        'username': 'user4',
        'email': 'user4@test.com',
        'password': 'password',
        'password_confirmation': 'password'
    })

    if errors:
        raise Exception(errors)

    db.session.add(user4)

    user5, errors = user_schema.load({
        'username': 'user5',
        'email': 'user5@test.com',
        'password': 'password',
        'password_confirmation': 'password'
    })

    if errors:
        raise Exception(errors)

    db.session.add(user5)

    user6, errors = user_schema.load({
        'username': 'user6',
        'email': 'user6@test.com',
        'password': 'password',
        'password_confirmation': 'password'
    })

    if errors:
        raise Exception(errors)

    db.session.add(user6)

    user7, errors = user_schema.load({
        'username': 'user7',
        'email': 'user7@test.com',
        'password': 'password',
        'password_confirmation': 'password'
    })

    if errors:
        raise Exception(errors)

    db.session.add(user7)

    user8, errors = user_schema.load({
        'username': 'user8',
        'email': 'user8@test.com',
        'password': 'password',
        'password_confirmation': 'password'
    })

    if errors:
        raise Exception(errors)

    db.session.add(user8)


    Copmcrew1 = Course(
        name='RYA Competent Crew',
        description='From small clubs specialising in particular classes through to large clubs with a host of activities across all boating disciplines there is a club to suit you and your family. The activities offered by the club are listed below but visit their website to find out more.',
        image='/assets/images/picNpgx.jpg',
        category='Sail Cruising',
        lat=0,
        lng=0,
        start_date='02/03/2019',
        end_date='05/03/2019',
        address='Aldenham Reservoir, Aldenham Road, Elstree, Borehamwood, Hertfordshire, WD6 3BD, UK'
        )
    db.session.add(Copmcrew1)

    Copmcrew2 = Course(
        name='RYA Competent Crew',
        description='From small clubs specialising in particular classes through to large clubs with a host of activities across all boating disciplines there is a club to suit you and your family. The activities offered by the club are listed below but visit their website to find out more.',
        image='/assets/images/picNpgx.jpg',
        category='Sail Cruising',
        lat=0,
        lng=0,
        start_date='02/03/2019',
        end_date='05/03/2019',
        address='old Oak Lane, West Hendon, Bristol, NW9 7ND, UK'
        )
    db.session.add(Copmcrew2)

    Copmcrew3 = Course(
        name='RYA Competent Crew',
        description='From small clubs specialising in particular classes through to large clubs with a host of activities across all boating disciplines there is a club to suit you and your family. The activities offered by the club are listed below but visit their website to find out more.',
        image='/assets/images/picNpgx.jpg',
        category='Sail Cruising',
        lat=0,
        lng=0,
        start_date='02/03/2019',
        end_date='05/03/2019',
        address='Cool Oak Lane, West Hendon, Canterbury, NW9 7NN, UK'
        )
    db.session.add(Copmcrew3)

    Copmcrew4 = Course(
        name='RYA Competent Crew',
        description='From small clubs specialising in particular classes through to large clubs with a host of activities across all boating disciplines there is a club to suit you and your family. The activities offered by the club are listed below but visit their website to find out more.',
        image='/assets/images/picNpgx.jpg',
        category='Sail Cruising',
        lat=0,
        lng=0,
        start_date='02/03/2019',
        end_date='05/03/2019',
        address='Birchen Grove, Cambridge, NW9 8SA, UK'
        )
    db.session.add(Copmcrew4)

    Copmcrew5 = Course(
        name='RYA Competent Crew',
        description='From small clubs specialising in particular classes through to large clubs with a host of activities across all boating disciplines there is a club to suit you and your family. The activities offered by the club are listed below but visit their website to find out more.',
        image='/assets/images/picNpgx.jpg',
        category='Sail Cruising',
        lat=0,
        lng=0,
        start_date='02/03/2019',
        end_date='05/03/2019',
        address='Welsh Harp Reservoir, Birchen Grove, Bradford, NW9 8SA, UK'
        )
    db.session.add(Copmcrew5)

    Copmcrew6 = Course(
        name='RYA Competent Crew',
        description='From small clubs specialising in particular classes through to large clubs with a host of activities across all boating disciplines there is a club to suit you and your family. The activities offered by the club are listed below but visit their website to find out more.',
        image='/assets/images/picNpgx.jpg',
        category='Sail Cruising',
        lat=0,
        lng=0,
        start_date='02/03/2019',
        end_date='05/03/2019',
        address='Welsh Harp Reservoir, Birchen Grove, Bath, NW9 8SA, UK'
        )
    db.session.add(Copmcrew6)

    Copmcrew7 = Course(
        name='RYA Competent Crew',
        description='From small clubs specialising in particular classes through to large clubs with a host of activities across all boating disciplines there is a club to suit you and your family. The activities offered by the club are listed below but visit their website to find out more.',
        image='/assets/images/picNpgx.jpg',
        category='Sail Cruising',
        lat=0,
        lng=0,
        start_date='02/03/2019',
        end_date='05/03/2019',
        address='Mercury Yacht Harbour, Satchell Lane, Hamble Southampton SO31 4HQ'
        )
    db.session.add(Copmcrew7)

    Copmcrew8 = Course(
        name='RYA Competent Crew',
        description='From small clubs specialising in particular classes through to large clubs with a host of activities across all boating disciplines there is a club to suit you and your family. The activities offered by the club are listed below but visit their website to find out more.',
        image='/assets/images/picNpgx.jpg',
        category='Sail Cruising',
        lat=0,
        lng=0,
        start_date='02/03/2019',
        end_date='05/03/2019',
        address='Falmouth Marina North Parade Falmouth Cornwall TR11 2TD'
        )
    db.session.add(Copmcrew8)

    addition1 = Course(
        name='RYA Competent Crew',
        description='From small clubs specialising in particular classes through to large clubs with a host of activities across all boating disciplines there is a club to suit you and your family. The activities offered by the club are listed below but visit their website to find out more.',
        image='/assets/images/picNpgx.jpg',
        category='Motor Cruising',
        lat=0,
        lng=0,
        start_date='02/03/2019',
        end_date='05/03/2019',
        address='Aldenham Reservoir, Aldenham Road, Elstree, Borehamwood, Hertfordshire, WD6 3BD, UK'
        )
    db.session.add(addition1)

    addition2 = Course(
        name='RYA Navigation Basics',
        description='From small clubs specialising in particular classes through to large clubs with a host of activities across all boating disciplines there is a club to suit you and your family. The activities offered by the club are listed below but visit their website to find out more.',
        image='/assets/images/picNpgx.jpg',
        category='Navigation & Seamanship Theory',
        lat=0,
        lng=0,
        start_date='02/03/2019',
        end_date='05/03/2019',
        address='old Oak Lane, West Hendon, Bristol, NW9 7ND, UK'
        )
    db.session.add(addition2)

    addition3 = Course(
        name='RYA Radar Crew',
        description='From small clubs specialising in particular classes through to large clubs with a host of activities across all boating disciplines there is a club to suit you and your family. The activities offered by the club are listed below but visit their website to find out more.',
        image='/assets/images/picNpgx.jpg',
        category='Specialist Short Courses',
        lat=0,
        lng=0,
        start_date='02/03/2019',
        end_date='05/03/2019',
        address='Cool Oak Lane, West Hendon, Canterbury, NW9 7NN, UK'
        )
    db.session.add(addition3)

    addition4 = Course(
        name='RYA Powerboat',
        description='From small clubs specialising in particular classes through to large clubs with a host of activities across all boating disciplines there is a club to suit you and your family. The activities offered by the club are listed below but visit their website to find out more.',
        image='/assets/images/picNpgx.jpg',
        category='Powerboat',
        lat=0,
        lng=0,
        start_date='02/03/2019',
        end_date='05/03/2019',
        address='Birchen Grove, Cambridge, NW9 8SA, UK'
        )
    db.session.add(addition4)

    addition5 = Course(
        name='RYA Dinghy',
        description='From small clubs specialising in particular classes through to large clubs with a host of activities across all boating disciplines there is a club to suit you and your family. The activities offered by the club are listed below but visit their website to find out more.',
        image='/assets/images/picNpgx.jpg',
        category='Dinghy, Multihull & Small Keelboats',
        lat=0,
        lng=0,
        start_date='02/03/2019',
        end_date='05/03/2019',
        address='Welsh Harp Reservoir, Birchen Grove, Bradford, NW9 8SA, UK'
        )
    db.session.add(addition5)

    addition6 = Course(
        name='RYA Windsurfing',
        description='From small clubs specialising in particular classes through to large clubs with a host of activities across all boating disciplines there is a club to suit you and your family. The activities offered by the club are listed below but visit their website to find out more.',
        image='/assets/images/picNpgx.jpg',
        category='Windsurfing',
        lat=0,
        lng=0,
        start_date='02/03/2019',
        end_date='05/03/2019',
        address='Welsh Harp Reservoir, Birchen Grove, Bath, NW9 8SA, UK'
        )
    db.session.add(addition6)

    addition7 = Course(
        name='RYA Waterways',
        description='From small clubs specialising in particular classes through to large clubs with a host of activities across all boating disciplines there is a club to suit you and your family. The activities offered by the club are listed below but visit their website to find out more.',
        image='/assets/images/picNpgx.jpg',
        category='Inland Waterways',
        lat=0,
        lng=0,
        start_date='02/03/2019',
        end_date='05/03/2019',
        address='Mercury Yacht Harbour, Satchell Lane, Hamble Southampton SO31 4HQ'
        )
    db.session.add(addition7)

    addition8 = Course(
        name='RYA Certificates of Competence',
        description='From small clubs specialising in particular classes through to large clubs with a host of activities across all boating disciplines there is a club to suit you and your family. The activities offered by the club are listed below but visit their website to find out more.',
        image='/assets/images/picNpgx.jpg',
        category='Certificates of Competence',
        lat=0,
        lng=0,
        start_date='02/03/2019',
        end_date='05/03/2019',
        address='Falmouth Marina North Parade Falmouth Cornwall TR11 2TD'
        )
    db.session.add(addition8)



    Online1 = Course(
        name='Interactive Online Courses',
        description='From small clubs specialising in particular classes through to large clubs with a host of activities across all boating disciplines there is a club to suit you and your family. The activities offered by the club are listed below but visit their website to find out more.',
        image='/assets/images/images.jpg',
        category='Take courses online',
        lat=0,
        lng=0,
        start_date='02/03/2019',
        end_date='05/03/2019',
        address='Aldenham Reservoir, Aldenham Road, Elstree, Borehamwood, Hertfordshire, WD6 3BD, UK'
        )
    db.session.add(Online1)

    Online2 = Course(
        name='Interactive Online Courses',
        description='From small clubs specialising in particular classes through to large clubs with a host of activities across all boating disciplines there is a club to suit you and your family. The activities offered by the club are listed below but visit their website to find out more.',
        image='/assets/images/images.jpg',
        category='Take courses online',
        lat=0,
        lng=0,
        start_date='02/03/2019',
        end_date='05/03/2019',
        address='old Oak Lane, West Hendon, Bristol, NW9 7ND, UK'
        )
    db.session.add(Online2)

    Online3 = Course(
        name='Interactive Online Courses',
        description='From small clubs specialising in particular classes through to large clubs with a host of activities across all boating disciplines there is a club to suit you and your family. The activities offered by the club are listed below but visit their website to find out more.',
        image='/assets/images/images.jpg',
        category='Take courses online',
        lat=0,
        lng=0,
        start_date='02/03/2019',
        end_date='05/03/2019',
        address='Cool Oak Lane, West Hendon, Canterbury, NW9 7NN, UK'
        )
    db.session.add(Online3)

    Online4 = Course(
        name='Interactive Online Courses',
        description='From small clubs specialising in particular classes through to large clubs with a host of activities across all boating disciplines there is a club to suit you and your family. The activities offered by the club are listed below but visit their website to find out more.',
        image='/assets/images/images.jpg',
        category='Take courses online',
        lat=0,
        lng=0,
        start_date='02/03/2019',
        end_date='05/03/2019',
        address='Birchen Grove, Cambridge, NW9 8SA, UK'
        )
    db.session.add(Online4)

    Online5 = Course(
        name='Interactive Online Courses',
        description='From small clubs specialising in particular classes through to large clubs with a host of activities across all boating disciplines there is a club to suit you and your family. The activities offered by the club are listed below but visit their website to find out more.',
        image='/assets/images/images.jpg',
        category='Take courses online',
        lat=0,
        lng=0,
        start_date='02/03/2019',
        end_date='05/03/2019',
        address='Welsh Harp Reservoir, Birchen Grove, Bath, NW9 8SA, UK'
        )
    db.session.add(Online5)

    Online6 = Course(
        name='Interactive Online Courses',
        description='From small clubs specialising in particular classes through to large clubs with a host of activities across all boating disciplines there is a club to suit you and your family. The activities offered by the club are listed below but visit their website to find out more.',
        image='/assets/images/images.jpg',
        category='Take courses online',
        lat=0,
        lng=0,
        start_date='02/03/2019',
        end_date='05/03/2019',
        address='Welsh Harp Reservoir, Birchen Grove, Bath, NW9 8SA, UK'
        )
    db.session.add(Online6)

    Online7 = Course(
        name='Interactive Online Courses',
        description='From small clubs specialising in particular classes through to large clubs with a host of activities across all boating disciplines there is a club to suit you and your family. The activities offered by the club are listed below but visit their website to find out more.',
        image='/assets/images/images.jpg',
        category='Take courses online',
        lat=0,
        lng=0,
        start_date='02/03/2019',
        end_date='05/03/2019',
        address='Mercury Yacht Harbour, Satchell Lane, Hamble Southampton SO31 4HQ'
        )
    db.session.add(Online7)

    Online8 = Course(
        name='Interactive Online Courses',
        description='From small clubs specialising in particular classes through to large clubs with a host of activities across all boating disciplines there is a club to suit you and your family. The activities offered by the club are listed below but visit their website to find out more.',
        image='/assets/images/images.jpg',
        category='Take courses online',
        lat=0,
        lng=0,
        start_date='02/03/2019',
        end_date='05/03/2019',
        address='Falmouth Marina North Parade Falmouth Cornwall TR11 2TD'
        )
    db.session.add(Online8)



    Aldenham = Company(
    name="Aldenham Sailing Club",
    description="From small clubs specialising in particular classes through to large clubs with .ite to find out more.",
    image='/assets/images/unnamed.jpg',
    address='Aldenham Reservoir, Aldenham Road, Elstree, Borehamwood, Hertfordshire, WD6 3BD, UK',
    lat=0,
    lng=0,
    courses=[Copmcrew1, Online1, addition1],
    user=user1
    )
    db.session.add(Aldenham)


    Broadsword = Company(
        name="Training Ship Broadsword - Sea Training Corps",
        description="From small clubs specialising in particular classes through to large clubs. visit their website to find out more.",
        image='/assets/images/unnamed.jpg',
        address='Cool Oak Lane, West Hendon, Bristol, NW9 7ND, UK',
        lat=0,
        lng=0,
        courses=[Copmcrew2, Online2, addition2],
        user=user2
    )
    db.session.add(Broadsword)

    Phoenix = Company(
        name="Phoenix Outdoor Centre",
        description="From small clubs specialising in particular classes through to large clubs. visit their website to find out more.",
        image='/assets/images/unnamed.jpg',
        address='Cool Oak Lane, West Hendon, Canterbury, NW9 7NN, UK',
        lat=0,
        lng=0,
        courses=[Copmcrew3, Online3, addition3],
        user=user3
    )
    db.session.add(Phoenix)

    Wembley = Company(
        name="Wembley Sailing",
        description="From small clubs specialising in particular classes through to large clubs. visit their website to find out more.",
        image='/assets/images/unnamed.jpg',
        address='Birchen Grove, Cambridge, NW9 8SA, UK',
        lat=0,
        lng=0,
        courses=[Copmcrew4, Online4, addition4],
        user=user4
    )
    db.session.add(Wembley)

    Broadsword = Company(
        name="Broadsword Sailing",
        description="From small clubs specialising in particular classes through to large clubs. visit their website to find out more.",
        image='/assets/images/unnamed.jpg',
        address='Welsh Harp Reservoir, Birchen Grove, Bradford, NW9 8SA, UK',
        lat=0,
        lng=0,
        courses=[Copmcrew5, Online5, addition5],
        user=user5
    )
    db.session.add(Broadsword)

    Welsh = Company(
        name="Welsh Harp Sailing Club",
        description="From small clubs specialising in particular classes through to large clubs. visit their website to find out more.",
        image='/assets/images/unnamed.jpg',
        address='Welsh Harp Reservoir, Birchen Grove, Bath, NW9 8SA, UK',
        lat=0,
        lng=0,
        courses=[Copmcrew6, Online6, addition6],
        user=user6
    )
    db.session.add(Welsh)

    Hamble = Company(
        name="Taking The Helm",
        description="From small clubs specialising in particular classes through to large clubs. visit their website to find out more.",
        image='/assets/images/unnamed.jpg',
        address='Mercury Yacht Harbour, Satchell Lane, Hamble Southampton SO31 4HQ',
        lat=0,
        lng=0,
        courses=[Copmcrew7, Online7, addition7],
        user=user7
    )
    db.session.add(Hamble)

    Cornish = Company(
        name="Cornish Cruising",
        description="From small clubs specialising in particular classes through to large clubs. visit their website to find out more.",
        image='/assets/images/unnamed.jpg',
        address='Falmouth Marina North Parade Falmouth Cornwall TR11 2TD',
        lat=0,
        lng=0,
        courses=[Copmcrew8, Online8, addition8],
        user=user8
    )
    db.session.add(Cornish)



    db.session.commit()
