# Dependencies:
1. nodemon
2. express
3. body-parser
4. pg
5. dotenv

createdb -U postgres monstersdb
psql -U postgres monstersdb
CREATE USER node_user WITH SUPERUSER PASSWORD 'node_password';
SELECT * FROM pg_user;

mkdir bin
