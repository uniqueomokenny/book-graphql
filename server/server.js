const app = require('express')();
const graphqlHTTP = require('express-graphql')


app.use('/graphql', graphqlHTTP({

}));


PORT = process.env.POST || 4000;
app.listen(4000, () => {
  console.log(`server now running at ${PORT}`)
})