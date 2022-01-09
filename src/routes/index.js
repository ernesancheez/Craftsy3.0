var express = require('express');
var router = express.Router();

const {index,admin} = require('../controllers/indexController');

const adminUserCheck = require('../middlewares/adminUserCheck');

/* GET home page. */
router.get('/', index);
router.get('/admin',adminUserCheck, admin)

module.exports = router;
