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
  age INT
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  posts_id INT REFERENCES users(id) ON DELETE CASCADE,
  body TEXT NOT NULL
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  likers_id INT REFERENCES users(id) ON DELETE CASCADE,
  posts_id INT REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  commenters_id INT REFERENCES users(id) ON DELETE CASCADE,
  posts_id INT REFERENCES users(id) ON DELETE CASCADE,
  body VARCHAR NOT NULL
);

CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  users_id  INT REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE pictures (
  id SERIAL PRIMARY KEY,
  pictures_id INT REFERENCES users(id) ON DELETE CASCADE,
  photo_url TEXT NOT NULL
);

INSERT INTO users(username, age)
VALUES ('Gregory Samsa', 54), ('Bobbie Tillman', 23), ('Tabitha Ealhstan', 34), ('Kamal Ante', 46), ('Keenan Kristian', 19), ('Lynne Meztli', 44), ('Amrita Gabriela', 62), ('Daniel Elke', 78), ('Roberta Alba', 27), ('Julia Layla', 55);

INSERT INTO posts(posts_id, body)
VALUES
  (6, 'Creative learning curve business plan. Conversion bandwidth partner network traction deployment focus leverage. Monetization social proof marketing scrum project investor innovator stock.'),
  (2, 'Growth hacking twitter iPad assets beta holy grail prototype. Monetization accelerator supply chain social media prototype angel investor responsive web design focus investor churn rate business model canvas mass market android infrastructure.'),
  (4, 'Freemium MVP graphical user interface bandwidth crowdfunding stealth. Deployment traction pitch innovator beta monetization iPhone pivot.'),
  (8, 'Vesting period virality prototype focus interaction design infrastructure founders accelerator backing responsive web design bandwidth entrepreneur early adopters long tail. Termsheet focus scrum project innovator prototype. Social proof ownership influencer. Client marketing twitter partner network prototype customer iPad.'),
  (3, 'Low hanging fruit ownership prototype stealth sales ecosystem stock infographic beta freemium.'),
  (1, 'Ownership direct mailing hackathon handshake equity facebook strategy non-disclosure agreement leverage value proposition deployment incubator.'), (9, 'Equity assets beta early adopters startup ownership iteration user experience android angel investor focus branding market success. Network effects deployment MVP hypotheses influencer startup social media.'),
  (10, 'Monetization android strategy crowdfunding launch party infographic ecosystem value proposition agile development.'),
  (5, 'A/B testing hypotheses ecosystem entrepreneur conversion interaction design. Seed money funding pitch.'),
  (7, 'Disruptive value proposition metrics.');

INSERT INTO likes(likers_id, posts_id)
VALUES (6, 1), (1, 2), (7, 3), (2, 4), (9, 5), (10, 6), (4, 7), (3, 8), (5, 10), (8, 9);

INSERT INTO comments(commenters_id, posts_id, body)
VALUES (2, 1, 'Your post looks amazing '),
(5, 2, 'it aint too pretty bruh'),
(4, 3, 'Fix IT !'),
(6, 4, 'listen just stop posting'),
(7, 5, 'This is pretty good'),
(1, 6, 'You might have a future'),
(3, 7, 'Please just stop'),
(10, 8, 'You should just quit now'),
(8, 9, 'Wow ! Bravo!'),
(9, 10, 'good shit');

INSERT INTO albums(users_id)
VALUES (1), (2), (3), (4), (5), (6), (7), (8), (9), (10);
--
INSERT INTO pictures(pictures_id, photo_url)
VALUES
(6, 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
(2, 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
(4, 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
(8, 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
(3, 'https://images.pexels.com/photos/62321/kitten-cat-fluffy-cat-cute-62321.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
(1, 'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
(9, 'https://images.pexels.com/photos/257532/pexels-photo-257532.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'), (10, 'https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'), (5, 'https://images.pexels.com/photos/979247/pexels-photo-979247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'), (7, 'https://images.pexels.com/photos/271955/pexels-photo-271955.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
