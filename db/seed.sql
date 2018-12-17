DROP DATABASE IF EXISTS fakebook;
CREATE DATABASE fakebook;

\c fakebook;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS pictures;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  age SERIAL NOT NULL
);

CREATE TABLE posts (

id SERIAL PRIMARY KEY,
poster_id INT REFERENCES users(id) ON DELETE CASCADE,
body TEXT NOT NULL
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  liker_id INT REFERENCES users(id),
  poster_id INT REFERENCES posts(id)
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  commenter_id INT REFERENCES users(id) ON DELETE CASCADE,
  post_id INT REFERENCES posts(id) ON DELETE CASCADE,
  body TEXT NOT NULL
);

CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id)
);

CREATE TABLE pictures (
  id SERIAL PRIMARY KEY,
  album_id INT REFERENCES albums(id),
  url VARCHAR NOT NULL
);

INSERT INTO users(name, age) VALUES ('Patrick Stan', 38), ('Brian Hans', 26), ('Jane Doe', 34);
INSERT INTO posts(poster_id, body) VALUES (2, 'This is my first post on this site.'), (1, 'It''s 3 a.m. and all I want is pancakes!'), (3, 'Running out of ideas for my project. Any suggestions will help.');
INSERT INTO comments(commenter_id, post_id, body) VALUES (3, 2, 'Why where you up so early? Bring pancakes to class with you!'), (2, 2, 'Yes! Pancakes for brunch. Any good place around school to get quality pancakes?');
INSERT INTO likes(liker_id, poster_id) VALUES (1, 3), (3, 1), (2, 3), (2, 1);
