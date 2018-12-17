DROP DATABASE IF EXISTS practice_unit_3;
CREATE DATABASE practice_unit_3;

\c practice_unit_3;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS pictures;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS albums;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL,
  email VARCHAR NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  posts_id INT REFERENCES users(id) ON DELETE CASCADE,
  body VARCHAR NOT NULL,
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  likes_id INT REFERENCES users(id) ON DELETE CASCADE,
  posts_id INT REFERENCES users(id) ON DELETE CASCADE,
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  comments_id INT REFERENCES users(id) ON DELETE CASCADE,
  body VARCHAR NOT NULL,
  posts_id INT REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  users_id  INT REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE pictures (
  id SERIAL PRIMARY KEY,
  photo_url VARCHAR NOT NULL,
  album_id INT REFERENCES albums(id) ON DELETE CASCADE
);

INSERT INTO users(username, email)
VALUES ('Michell', 'michell@michell.michell'), ('miguel', 'blitzxp@games.com');

INSERT INTO posts(posts_id, body)
VALUES ((1, 'This is my first comment!', ), (2, 'This would obviously be my second!'), (3, 'And well duh this is my third'));

INSERT INTO likes(likes_id, posts_id)
VALUES ()

INSERT INTO comments(comments_id, body, posts_id)
VALUES ()

INSERT INTO albums(users_id)
VALUES ()

INSERT INTO pictures(photo_url, album_id)
VALUES()
