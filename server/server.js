const app = require('express')();
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema')


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server now running at ${port}`)
})