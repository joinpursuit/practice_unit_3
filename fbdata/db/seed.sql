DROP DATABASE IF EXISTS fbdata;
CREATE DATABASE fbdata;

\c fbdata;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS pictures;
DROP TABLE IF EXISTS posts;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  age INT NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  body TEXT NOT NULL
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  post_id INT REFERENCES posts(id) ON DELETE CASCADE,
  user_id INT REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  post_id INT REFERENCES posts(id) ON DELETE CASCADE,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  body TEXT NOT NULL
);

CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  album_name VARCHAR NOT NULL
);

CREATE TABLE pictures (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  album_id INT REFERENCES albums(id) ON DELETE CASCADE,
  url VARCHAR NOT NULL
);


INSERT INTO users(name,age) VALUES ('Jon',5), ('Ilana',9);
INSERT INTO posts(user_id,body) VALUES (1,'Test it'), (2,'Add more tests!CYKA BLYAT!'),(1,'third test'),(2,'fourthtest for posts');
INSERT INTO likes(post_id,user_id) VALUES (1,2), (2,1),(2,2);
INSERT INTO comments(post_id,user_id,body) VALUES (2,1,'commenttest1'), (1,2,'comment test 2');
INSERT INTO albums(user_id,album_name) VALUES (1,'happy'), (2,'content');
INSERT INTO pictures(user_id,album_id,url) VALUES (1,2,'www.googlepics.com'),(2,1,'www.yahoo.com/pics')
