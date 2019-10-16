const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err,client) => {
    if (err) {
        return console.log('Connection failed');
    }
    console.log('Connecttion Succesful!');
    const db = client.db('TodosApp');

    db.collection('Todos').insertOne({
        text: "Indranil",
        completed: false
    }, (err,result) => {
        if (err) {
            return console.log('Cannott add field', err);
        }
        console.log(JSON.stringify(result.ops));
    });
    
    db.collection('Users').insertOne({
        name: "Indranil",
        age: "20",
        DOB: "11/02/99"
    }, (err,result) => {
        if (err) {
            return console.log('Cannott add field', err);
        }
        console.log(JSON.stringify(result.ops));
    });



    client.close();

})