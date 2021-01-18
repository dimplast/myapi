const express = require('express');
const {getBootcamps, 
       getBootcamp, 
       createBootcamp, 
       updateBootcamp, 
       deleteBootcamp} = require('../controllers/bootcamps');

const Bootcamp = require('../models/Bootcamp');

const advancedResults = require('../middleware/advancedResults');

//Include other resource routers
const courseRouter = require('./courses');

const router = express.Router();

//Re-route into other rsource routers
router.use('/:bootcampId/courses', courseRouter);

router.route('/')
    .get(advancedResults(Bootcamp, 'courses'), getBootcamps)
    .post(createBootcamp);

router.route('/:id')
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp);

module.exports = router;


