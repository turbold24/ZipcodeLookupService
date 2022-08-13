const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const path = require('path');

const app = express();

// Allow cross-origin
// app.use(cors());

const corsOptions = {
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
    mode: 'no-cores',
    origin: 'http://localhost:3000',
}

app.use(cors(corsOptions))


app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true
    })
);

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = 5002;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = corsOptions;
