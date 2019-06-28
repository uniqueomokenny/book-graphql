const app = require('express')();
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

// connect to the db
mongoose.connect('mongodb://localhost:27017/book', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('connected to the database')
})


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server now running at ${port}`)
})