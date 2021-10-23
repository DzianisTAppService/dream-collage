const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');

const app = express();

// Replace with your mongoLab URI
const MONGO_URI =
  'mongodb+srv://telicinda:Pilnickaya14@cluster0.jkfcc.mongodb.net/dream-desc?retryWrites=true&w=majority';
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', (error) => console.log('Error connecting to MongoLab:', error));

app.use(bodyParser.json());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(5000, () => {
  console.log(`Server ready at http://localhost:5000`);
});

module.exports = app;
