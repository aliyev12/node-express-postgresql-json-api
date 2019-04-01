const express = require ('express');
const bodyParser = require('body-parser');
const monsters = require('./routes/monsters');

const app = express ();

app.use(bodyParser.json());

app.use('/monsters', monsters);

// Adding middlewear
app.use((err, req, res, next) => {
    console.log('ERROR FROM MIDDLEWARE ', err);
    res.json(err);
});

module.exports = app;






//===
//===
//=== TRASH BELOW
//===
//===



    // pool.connect((err, client, done) => {
    //     if (err) throw err
    //     client.query('SELECT * FROM monsters', (err, res) => {
    //       done();
      
    //       if (err) {
    //         console.log(err.stack)
    //       } else {
    //         console.log(res.rows);
    //         response.json(res.rows);
    //       }
    //     })
    //   });



//     ////
// const pg = require('pg');
// const conString = "	postgres://nxtjtwpg:2l6RB7nPFPT6FTl-Pwfn215fhQb2lk6j@isilo.db.elephantsql.com:5432/nxtjtwpg" //Can be found in the Details page
// const client = new pg.Client(conString);
// /////

// /////
// const { Pool } = require('pg')
// // const pool = new Pool(conString);
// const pool = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     password: process.env.PGPASSWORD,
//     port: process.env.DB_PORT
// });

// /////





// app.get ('/testik', (request, response, next) => {
//     client.connect((error) => {
//         if(error)  return console.error('could not connect to postgres', err);
        
//         client.query('SELECT * FROM monsters', (err, result) => {
//           if(err) {
//             return console.error('error running query', err);
//           }
//           console.log(result.rows);
//           response.json(result.rows);
//           client.end();
//         });
//       });
// });

// app.get ('/poop', (request, response, next) => {
//       pool.query('select * from monsters', (err, res) => {
//         if (err) {
//           throw err
//         }
      
//         console.log('fun stuff:', res.rows)
//         response.json(res.rows);
//     });

// });