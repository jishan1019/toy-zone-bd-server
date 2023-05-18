const express = require('express')
const cors = require("cors")
const app = express()
app.use(cors())
const port = process.env.PORT || 3000;
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');


app.get('/', (req, res) => {
    res.send('Hello World')
})




const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ac-re8a3ak-shard-00-00.q1ppz51.mongodb.net:27017,ac-re8a3ak-shard-00-01.q1ppz51.mongodb.net:27017,ac-re8a3ak-shard-00-02.q1ppz51.mongodb.net:27017/?ssl=true&replicaSet=atlas-p2ax84-shard-0&authSource=admin&retryWrites=true&w=majority`

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.listen(port, () => {
    console.log("App Running On Port");
})