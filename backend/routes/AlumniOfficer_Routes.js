const express = require('express');
const router = express.Router();
const alumniOfficerController = require('../controllers/alumniOfficerController');

// Define routes
router.get('/', alumniOfficerController.getAllAlumniOfficers);
router.post('/', alumniOfficerController.createAlumniOfficer);
router.get('/:id', alumniOfficerController.getAlumniOfficerById);
router.put('/:id', alumniOfficerController.updateAlumniOfficer);
router.delete('/:id', alumniOfficerController.deleteAlumniOfficer);

module.exports = router;
