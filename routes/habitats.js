const {Router} = require ('express');
const pool = require ('../db');

const router = Router ();

/*=== INDEX ===*/
router.get ('/', (request, response, next) => {
  pool.query ('SELECT * FROM habitats ORDER BY id ASC', (err, res) => {
    if (err) return next (err);
    response.json (res.rows);
  });
});

/*=== SHOW ===*/
router.get ('/:id', (request, response, next) => {
  const {id} = request.params;
  pool.query ('SELECT * FROM habitats WHERE id=($1)', [id], (err, res) => {
    if (err) return next (err);
    response.json (res.rows);
  });
});

/*=== CREATE ===*/
router.post ('/', async (request, response, next) => {
  const {name, climate, temperature} = request.body;
  let oldHabitats = [];
  let arrayWithNew = [];
  let newHabitats = [];
  try {
    const res = await pool.query ('SELECT * FROM habitats');
    oldHabitats = res.rows;
    const res2 = await pool.query (
      'INSERT INTO habitats(name, climate, temperature) VALUES($1, $2, $3)',
      [name, climate, temperature]
    );
    const res3 = await pool.query ('SELECT * FROM habitats');
    newHabitats = res3.rows;
    arrayWithNew = newHabitats.filter (nh => {
      return !oldHabitats.map (o => o.id).includes (nh.id);
    });
    response.json (arrayWithNew[0]);
  } catch (err) {
    return next (err);
  }
});

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

/*=== UPDATE ===*/
router.put ('/:id', (request, response, next) => {
  const {id} = request.params;
  const keys = ['name', 'climate', 'temperature'];
  const fields = keys.filter (key => request.body[key]);
  fields.forEach ((field, i) => {
    pool.query (
      `UPDATE habitats SET ${field}=($1) WHERE id=($2)`,
      [request.body[field], id],
      (err, res) => {
        if (err) return next (err);
        if (i === fields.length - 1) response.redirect (`/habitats/${id}`);
      }
    );
  });
});

/*=== DELETE ===*/
router.delete ('/:id', (request, response, next) => {
  const {id} = request.params;
  pool.query ('DELETE FROM habitats WHERE id=($1)', [id], (err, res) => {
    if (err) return next (err);
    response.redirect ('/habitats');
  });
});

module.exports = router;
