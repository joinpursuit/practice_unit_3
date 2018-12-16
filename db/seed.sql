DROP DATABASE IF EXISTS fb;
CREATE DATABASE fb;

\c fb;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS pictures;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR NOT NULL,
  user_email VARCHAR NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  post_user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  post_body TEXT NOT NULL
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  like_user_id INT REFERENCES users(id) ON DELETE SET NULL,
  like_post_id INT NOT NULL REFERENCES posts(id) ON DELETE CASCADE
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  comment_user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  comment_post_id INT NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  comment_body TEXT NOT NULL
);

CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  album_user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  album_name VARCHAR NOT NULL
);

CREATE TABLE pictures (
  id SERIAL PRIMARY KEY,
  picture_user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  picture_url VARCHAR NOT NULL
);

INSERT INTO users(user_name, user_email) VALUES ('Sheabaebae', 's@g'), ('Mateo', 'm@n');
