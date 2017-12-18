const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const schema = require('./graphql');
require('./db/server');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
// GraphQL Server Route
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
}));

// Start Server
const server = app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});

