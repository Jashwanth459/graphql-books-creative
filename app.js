const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schemas/schema')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

// const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://jaswanth459:Jadhu9490865776@cluster0-say9x.mongodb.net/samplegql_db?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true }, { useUnifiedTopology: true });
// client.connect(err => {
//     console.log('err ', err);
//   const collection = client.db("samplegql_db").collection("samplegql_collection");
//   // perform actions on the collection object
//   console.log('hey');
//   client.close();
// });

// client.isConnected(() => { 
//     console.log('Connected');
// })

mongoose.connect(uri, { useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected DB');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(8000, ()=> {
    console.log('Listening @8000....');
})
