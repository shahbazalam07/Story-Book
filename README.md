# StoryBooks :books::pencil:
_A web app that allows people to share public stories or to keep them private or unpublished. The users can sign-in using Google OAuth. They can edit the stories posted by them, see the public stories posted by others. In each story, the user can specify whether to allow comments on the story or not._

## Demo
https://storybooks-nirajx1d.herokuapp.com/

## Tools and Technologies
* Node.js
* Express
* MongoDB

## Modules and Libraries used
* [express](https://expressjs.com/): a Node.js web application framework that provides a robust set of features for web and mobile applications
* [mongoose](https://mongoosejs.com/): provides a straight-forward, schema-based solution to model your application data
* [passport](http://www.passportjs.org/): an authentication middleware for Node.js
* [passport-google-oauth20](https://github.com/jaredhanson/passport-google-oauth2): Google (OAuth 2.0) authentication strategy for Passport
* [express-session](https://github.com/expressjs/session): simple session middleware for Express
* [cookie-parser](https://www.npmjs.com/package/cookie-parser): parse HTTP request cookies
* [body-parser](https://github.com/expressjs/body-parser): Node.js body parsing middleware
* [express-handlebars](https://www.npmjs.com/package/express-handlebars): a view engine for Express
* [method-override](https://github.com/expressjs/method-override): override HTTP verbs
* [moment](https://momentjs.com/): parse, validate, manipulate, and display dates and times in JavaScript

## Running Locally
#### Requirements: Node.js (Download [here](https://nodejs.org/))
Once you have Node.js installed, follow these steps:

1. Create a config/keys_dev.js file and add the following lines:
```
module.exports = {
  mongoURI: 'YOUR_MONGODB_URL',
  googleClientId: 'YOUR_GOOGLE_CLIENT_ID',
  googleClientSecret: 'YOUR_GOOGLE_SECRET_ID''
};
```

2. Cloning and installing dependencies
```
git clone https://github.com/nirajx1d/StoryBooks.git
cd StoryBooks
npm install
```
3. Start the server on port 5000
```
npm start
```
4. Open your browser and visit:
```
localhost:5000
```
