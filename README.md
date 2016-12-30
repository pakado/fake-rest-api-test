JSON Server powers this website. You can use it to create the same fake API.

Install

$ npm install -g json-server

Example

Create a db.json file

{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}

Start JSON Server:

$ json-server --watch db.json

To generate fake data we need to create generate.js file

Install

$ npm install faker lodash

Start the fake data Server:

$ json-server generate.js