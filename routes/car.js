var express = require('express');
var router = express.Router();

const car_controlers = require('../controllers/car')

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('car', { title: 'Search Results Car' });
// });

/* GET detail car page */ 
router.get('/detail', car_controlers.car_view_one_Page);
router.get('/', car_controlers.car_view_all_Page);

/* GET create car page */ 
router.get('/create', secured, car_controlers.car_create_Page); 

/* GET create update page */ 
router.get('/update', secured,car_controlers.car_update_Page); 

/* GET create car page */ 
router.get('/delete', secured,car_controlers.car_delete_Page); 

module.exports = router;
