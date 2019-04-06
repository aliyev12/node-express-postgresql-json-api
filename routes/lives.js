const { Router } = require('express');
const router = Router();
const pool = require('../db');

/*=== INDEX ===*/
router.get('/', (request, response, next) => {
    pool.query(
        'SELECT * FROM lives ORDER BY id ASC',
        (err, res) => {
            if (err) return next(err);
            response.json(res.rows);
        }
    );
});

/*=== CONDITION ===*/
router.get('/conditions', (request, response, next) => {
    pool.query(
        'SELECT lives.monster, lives.habitat, habitats.name, habitats.climate, habitats.temperature FROM lives JOIN habitats ON habitats.name = lives.habitat',
        (err, res) => {
            if (err) return next(err);
            response.json(res.rows);
        }
        );
});

module.exports = router;