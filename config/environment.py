import os

db_uri = os.getenv('DATABASE_URL', 'postgres://localhost:5432/course-finder')

secret = os.getenv('SECRET', ',V~9gHnzBd2E')
