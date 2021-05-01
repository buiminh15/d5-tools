const csvtojson = require("csvtojson");
const mongodb = require('mongodb').MongoClient;

let url =
  'mongodb+srv://minhbb:12345678a@cluster0.grd6k.mongodb.net/d5-test?retryWrites=true&w=majority';
csvtojson()
  .fromFile('data.csv')
  .then((csvData) => {
     mongodb.connect(
       url,
       { useNewUrlParser: true, useUnifiedTopology: true,  },
       (err, client) => {
         if (err) throw err;

         client
           .db('d5-test')
           .collection('login')
           .insertMany(csvData, (err, res) => {
             if (err) throw err;

             console.log(`Inserted: ${res.insertedCount} rows`);
             client.close();
           });
       }
     );
  });