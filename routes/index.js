const { Router } = require('express');
const apis = require('./apis');
const monsters = require('./monsters');
const habitats = require('./habitats');
const lives = require('./lives');


const router = Router();
router.use('/api', apis);
router.use('/monsters', monsters);
router.use('/habitats', habitats);
router.use('/lives', lives);

module.exports = router;