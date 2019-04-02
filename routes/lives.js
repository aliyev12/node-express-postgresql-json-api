const { Router } = require('express');
const router = Router();
const pool = require('../db');

/*=== INDEX ===*/
router.get('/', (request, response, next) => {
    pool.query(
        'SELECT * FROM lives',
        (err, res) => {
            if (err) return next(err);
            response.json(res.rows);
        }
    );
});

module.exports = router;