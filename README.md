# Milestone

A social fitness application for gym rats, weekend warriors, and spring-quarter burnouts. Users can share their workouts, view each other’s posts, and set new PR’s using our built-in stopwatch. This application is our final project submission for our CS35l: Software Construction.

## Technologies

- Mongoose/MongoDB
- React + Redux
- Express
- Node

## Installation

1. Clone the repo:

```bash
git clone <url>
```

2. Install the necessary dependencies locally within each folder: CS35lFinalProj, client, and server.

```bash
cd <folder>
npm install
```

3. Create a MongoDB account to store data from the app. Go to mongodb.com and create a free account.
   Then set up a collection to store your data and click connect -> connect your application -> and you will
   find a string that you will use to connect your application to the database in the form "mongodb+srv://yourUsername:yourPassword@cluster0.c8qdd.mongodb.net/CollectionName?retryWrites=true&w=majority".

   Copy that string and paste it in the server/config/default.json file after the "mongoURI": PLACE HERE,
   making sure to put the string within parantheses. Now your database will store the information on
   the app.

4. To run the application locally, cd into the server folder and enter “npm run dev” to run the server and client sides concurrently.

```bash
cd <server>
npm run dev
```

## Features

- User login and registration
- Users can upload workouts
- Users have the ability to see and like other user’s posts, and delete their own posts
- A stopwatch to time workout sessions curated by the user
- Ability to search through other users posts with a search bar

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Team Members

- Colin Johnson
- Denver Brown
- Alejandro Marquez
- Ernest Kim
- Oluchi Nzerem
