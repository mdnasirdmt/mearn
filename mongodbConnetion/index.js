const { MongoClient } = require("mongodb")
// const url = 'mongodb://localhost:27017'
const url= 'mongodb://127.0.0.1:27017'
// const url = 'mongodb+srv://<credentials>@cluster0.bbebs8u.mongodb.net' //mongodb atlas cloud database 
const database= 'blog'
const collection1= 'posts'

const client = new MongoClient(url)


databaseConnection = async () => {

    let result= await client.connect()
    console.log('Connected successfully to server ');
    let db= result.db(database)
    let collection2= db.collection(collection1)
    let response= await collection2.find({}).toArray()
    console.log(response)

}

databaseConnection()