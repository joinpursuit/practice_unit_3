DROP DATABASE IF EXISTS facebook;

CREATE DATABASE facebook;

\c facebook;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR,
  last_name VARCHAR,
  email VARCHAR
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  poster_id INT REFERENCES users(id) ON DELETE CASCADE,
  body TEXT NOT NULL
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  posts_id INT REFERENCES posts(id) ON DELETE CASCADE,
  user_id INT REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  posts_id INT REFERENCES posts(id),
  body TEXT NOT NULL
);

CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id)
);

CREATE TABLE pictures (
  id SERIAL PRIMARY KEY,
  album_id INT REFERENCES albums(id),
  url TEXT
);



