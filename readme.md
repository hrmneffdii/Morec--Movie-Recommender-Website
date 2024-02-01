# 🎬 Morec - Movie Recommender App



Morec is a website crafted using Vite, React, Express, Mongo, and other cutting-edge technologies. Designed with the specific intention of serving as a humorous portfolio, this platform incorporates fundamental concepts like React's component structure and the creation of a database schema with Express, among other features.

## 🚀 Features

- 🗝 Seamlessly sign up and log in using a user-friendly form.
- 👤 Effortlessly log out with an intuitive session concept.
- 🗨 Explore a captivating array of randomly selected films.
- ➡️🔄 Navigate effortlessly through Next and Prev buttons to discover more random film lists.
- 👑 Receive personalized recommendations from the system for similar films.

## 🛠️ Main Technologies
- `React`
- `Express`
- `MongoDB`
- `Node`
- `Vite`
- `Styled Components`
- `Machine Learning`

## 🤔 Background

Basically, I am a data science student who wants to apply a machine learning model to a website. On the other hand, I am also interested in web development, especially MERN stack technologies. So, in my opinion, the most likely project I can undertake is a movie recommender system website, which implements a simple machine learning model.

## 📝 Process

Firstly, I have noted the prerequisites for this project, such as setting up the frontend (using React and Tailwind CSS), configuring the backend (using Express), and establishing the MongoDB database.

Afterward, I initiated the project by creating a database model for storing user data. Following that, I developed APIs for user login and sign-up functionalities. Subsequently, I verified the proper functioning of the APIs and ensured thorough documentation for future reference.

When I considered the backend complete, I proceeded to develop the login page, sign-up page, home page, and recommendation page. To streamline the development process, I created several components, such as film cards, and ensured proper routing for each page.

The most challenging aspect arose when integrating the machine learning model into the website. While the website operates on JavaScript runtime, the machine learning model relies on Python runtime, requiring extra effort to resolve. After attempting various approaches, I successfully found a solution: running the machine learning model within the JavaScript runtime with modifications to the structure

## 🤨 How Can It Be Improved?

It would be amazing if this website could display images of films. Unfortunately, the website currently cannot showcase film images due to the absence of image data in the database. Since this project relies on a machine learning dataset that does not provide images for films, only data is available for the films

## 🐛 Current Bug

So far, I have encountered problems including the first time reloading, sometimes the hover button for reloading doesn't appear so I have to reload again. Apart from that, there are also errors in the selected films section where sometimes there are films that are not in the database so they do not appear on the website. It's problem will be resolve if the database owned is complete.
