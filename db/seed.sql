DROP DATABASE IF EXISTS facebook;
CREATE DATABASE facebook;

\c facebook;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS pictures;

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
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  post_id INT REFERENCES posts(id) ON DELETE CASCADE
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  post_id INT REFERENCES posts(id) ON DELETE CASCADE,
  body VARCHAR NOT NULL
);

CREATE TABLE pictures (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  url TEXT NOT NULL
);

CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR NOT NULL
);


INSERT INTO users(name, age) VALUES ('Lisa',45),('Gabriel',53),('Mary',29);

INSERT INTO posts(user_id, body) VALUES (1,'Uncle Rupert laughed at the her joke, though no one else did.'),(2,'Another day came little different. The dredgery was shockingly mundane to Sherry.'),(3,'Monetization android strategy crowdfunding launch party infographic ecosystem value proposition agile development.');

INSERT INTO likes(user_id, post_id) VALUES (1,1),(2,2),(3,3);

-- INSERT INTO comments(user_id, post_id) VALUES (1,1), (2,2),(3,3);

INSERT INTO comments(user_id, post_id, body) VALUES (1,1, 'i like this post'), (2,2, 'i really donnt like you.'),(3,3, 'this is great!');
--

INSERT INTO albums(user_id, title) VALUES (1,'cats warm'),(2, 'lovely cats'),(3,'stretching cats');

INSERT INTO pictures(user_id, url) VALUES (1,      'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),(2,      'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),(3,      'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
