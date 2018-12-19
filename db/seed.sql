DROP DATABASE IF EXISTS practice_unit_3;
CREATE DATABASE practice_unit_3;

\c practice_unit_3;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  age INT NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  poster_id INT REFERENCES users(id) ON DELETE CASCADE,
  body VARCHAR NOT NULL
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  liker_id INT REFERENCES users(id),
  post_id INT REFERENCES posts(id)
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  commenter_id INT REFERENCES users(id),
  post_id INT REFERENCES posts(id),
  body VARCHAR NOT NULL
);

CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id)
);

CREATE Table Pictures (
  id SERIAL PRIMARY KEY,
  album_id INT REFERENCES albums(id),
  url VARCHAR NOT NULL
);

INSERT INTO users (name, age) VALUES ('Jonelle Bain', 38), ('Max Mezalon', 27);

INSERT INTO posts (poster_id, body) VALUES (1, 'this is my first posts'), (1, 'this is pretty cool'), (2, 'checking this post for user 2');

INSERT INTO likes (liker_id, post_id) VALUES (2,2), (1,2), (1,3), (2,1), (2,2)
