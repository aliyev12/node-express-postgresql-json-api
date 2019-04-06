const {Router} = require ('express');
const pool = require ('../db');
require ('dotenv').config ();
const config = require('../bin/config-azure');
const jwt = require('jsonwebtoken');
const azureData = require('../bin/sql/azureData');
const axios = require('axios');

const router = Router ();

// /*=== INDEX ===*/
router.get ('/', async (request, response, next) => {
  //   pool.query ('SELECT * FROM habitats ORDER BY id ASC', (err, res) => {
  //     if (err) return next (err);
  //     response.json (res.rows);
  //   });

  response.json ({
    message: 'Welcome to the API!',
  });
});

/************************************/
/*=== ROUTES WITH AUTHENTICATION ===*/
/************************************/
// /*=== INDEX ===*/
// router.get ('/', (request, response, next) => {
//   //   pool.query ('SELECT * FROM habitats ORDER BY id ASC', (err, res) => {
//   //     if (err) return next (err);
//   //     response.json (res.rows);
//   //   });
//   response.json ({
//     message: 'Welcome to the API!',
//   });
// });

// router.post ('/posts', verifyToken, (request, response, next) => {
//   jwt.verify(request.token, process.env.JWT_SECRET, (err, authData) => {
//     if (err) {
//         response.sendStatus(403);
//     } else {
//         response.json({
//             message: 'Post created...',
//             authData
//         });
//     }
//   });
// });

// router.post ('/login', async (request, response, next) => {
//   // Mock user
//   const user = {
//     id: 1,
//     username: 'jb',
//     email: 'jb@jb.jb',
//   };
//   await jwt.sign ({user}, process.env.JWT_SECRET, { expiresIn: '30s' }, (err, token) => {
//       response.json ({ token });
//   });
// });

// function verifyToken(req, res, next) {
//     // Get auth header value
//     const bearerHeader = req.headers['authorization'];
//     // Check if bearer is undefined
//     if (typeof bearerHeader !== undefined) {
//         // Split at the space
//         const bearer = bearerHeader.split(' ');
//         // Get token from array
//         const bearerToken = bearer[1];
//         // Set the token
//         req.token = bearerToken;
//         // Next middleware
//         next();
//     } else {
//         // Forbidden
//         res.sendStatus(403);
//     }
// }
/************************************/
/*=== END!!! ROUTES WITH AUTHENTICATION ===*/
/************************************/

/************************************/
/*=== PREVIOUS ROUTES ===*/
/************************************/
// /*=== SHOW ===*/
// router.get ('/:id', (request, response, next) => {
//   const {id} = request.params;
//   pool.query ('SELECT * FROM habitats WHERE id=($1)', [id], (err, res) => {
//     if (err) return next (err);
//     response.json (res.rows);
//   });
// });

// /*=== CREATE ===*/
// router.post ('/', async (request, response, next) => {
//   const {name, climate, temperature} = request.body;
//   let oldHabitats = [];
//   let arrayWithNew = [];
//   let newHabitats = [];
//   try {
//     const res = await pool.query ('SELECT * FROM habitats');
//     oldHabitats = res.rows;
//     const res2 = await pool.query (
//       'INSERT INTO habitats(name, climate, temperature) VALUES($1, $2, $3)',
//       [name, climate, temperature]
//     );
//     const res3 = await pool.query ('SELECT * FROM habitats');
//     newHabitats = res3.rows;
//     arrayWithNew = newHabitats.filter (nh => {
//       return !oldHabitats.map (o => o.id).includes (nh.id);
//     });
//     response.json (arrayWithNew[0]);
//   } catch (err) {
//     return next (err);
//   }
// });

// router.post ('/', (request, response, next) => {
//   const {name, climate, temperature} = request.body;
//   let oldHabitats = [];
//   let arrayWithNew = [];
//   pool.query ('SELECT * FROM habitats', (err, res) => {
//     if (err) return next (err);
//     oldHabitats = res.rows;
//   });
//   pool.query (
//     'INSERT INTO habitats(name, climate, temperature) VALUES($1, $2, $3)',
//     [name, climate, temperature],
//     (err, res) => {
//       if (err) return next (err);
//       let newHabitats = [];
//       pool.query ('SELECT * FROM habitats', (e, r) => {
//         if (e) return next (e);
//         newHabitats = r.rows;
//         arrayWithNew = newHabitats.filter (nh => {
//           return !oldHabitats.map (o => o.id).includes (nh.id);
//         });
//         response.json (arrayWithNew[0]);
//       });
//     }
//   );
// });

// /*=== UPDATE ===*/
// router.put ('/:id', (request, response, next) => {
//   const {id} = request.params;
//   const keys = ['name', 'climate', 'temperature'];
//   const fields = keys.filter (key => request.body[key]);
//   fields.forEach ((field, i) => {
//     pool.query (
//       `UPDATE habitats SET ${field}=($1) WHERE id=($2)`,
//       [request.body[field], id],
//       (err, res) => {
//         if (err) return next (err);
//         if (i === fields.length - 1) response.redirect (`/habitats/${id}`);
//       }
//     );
//   });
// });

// /*=== DELETE ===*/
// router.delete ('/:id', (request, response, next) => {
//   const {id} = request.params;
//   pool.query ('DELETE FROM habitats WHERE id=($1)', [id], (err, res) => {
//     if (err) return next (err);
//     response.redirect ('/habitats');
//   });
// });

/************************************/
/*=== END!!! PREVIOUS ROUTES ===*/
/************************************/

module.exports = router;
