# Social Network API
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description
  This is the back-end for a social network application written built with Node.js using Express and Mongoose packages.

  ## Screenshots
 ![Demo](./assets/demo-04.gif?raw=true)

  ## Table of Contents
  - [Installation](#installation)
  - [Video-Walkthrough](#video-walkthrough)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

  ## Installation
  To install this application, clone the repository and run npm install to install the dependencies.

  ## Video-Walkthrough
  A video walkthrough for this application can be found [here.](https://drive.google.com/file/d/1CEKhhiO36a2P9pwKejM-GlfINcalPoIU/view)

  ## Usage
  This is an API for a social network application built in Node.js. All the API requests are as follows-

### Users
  <b>GET All Users-</b> <code>GET Request at /api/users</code> <br />
  <b>GET One User-</b> <code>GET Request at /api/users/:userId</code> <br />
  <b>CREATE New User-</b> <code>POST Request at /api/users</code> <br />
  <b>UPDATE A User-</b> <code>PUT Request at /api/users/:userId</code> <br />
  <b>DELETE A User-</b> <code>DELETE Request at /api/users/:userId</code> <br />
  <b>ADD A Friend-</b>  <code>POST Request at /api/users/:userId/friends/:friendId</code><br />
  <b>DELETE A Friend-</b> <code>DELETE Request at /api/users/:userId/friends/:friendId</code> <br />

  ### Thoughts
<b>GET All Thoughts-</b> <code>GET Request at /api/thoughts</code> <br />
  <b>GET One Thought-</b> <code>GET Request at /api/thoughts/:thoughtId</code> <br />
  <b>CREATE New Thought-</b> <code>POST Request at /api/thoughts</code> <br />
  <b>UPDATE A Thought-</b> <code>PUT Request at /api/thoughts/:thoughtId</code> <br />
  <b>DELETE A Thought-</b> <code>DELETE Request at /api/thoughts/:thoughtId</code> <br />
  <b>ADD A Reaction-</b>  <code>POST Request at /api/thoughts/:thoughtId/reactions</code><br />
  <b>DELETE A Reaction-</b> <code>DELETE Request at /api/thoughts/:thoughtId/reactions/:reactionId</code> <br />

  ## Contributing
  Fork the repository and create a new pull request.

  ## Tests
  There are no tests for this application.

  ## Questions
  If you have any questions, feel free to reach out to me at below- 

  GitHub: [GurkiratSaini](https://github.com/GurkiratSaini)

  ## License
  This project is licensed under the terms of MIT License
  