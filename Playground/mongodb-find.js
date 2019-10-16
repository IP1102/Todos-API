//const MongoClient = require('mongodb').MongoClient;

const {MongoClient} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017', (err,client) => {
    if (err) {
        return console.log('Connection failed');
    }
    console.log('Connecttion Succesful!');
    const db = client.db('TodosApp');

   /*  db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs));
    }); */

   /*  db.collection('Todos').find({completed: false}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs));
    });
 */

db.collection('Todos').find({completed: false}).count().then((count) => {
    console.log(`Count: ${count}`);
    //console.log(JSON.stringify(docs));
}, (err) => {
    console.log('Cannot fetch document');
});


    client.close();

})