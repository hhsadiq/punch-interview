/*
 * BaseController will load all the controllers and API routes defined within them
 */
const express = require('express');

const router = express.Router();

router.use('/fetch/the/titles', require('../titles/titles.routes'));

// generic catch others, not implemented
router.get('/*', (req, res) => res.status(404).send('URL not found'));

module.exports = router;
