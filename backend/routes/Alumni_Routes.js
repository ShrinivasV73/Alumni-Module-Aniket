// routes/alumniRoutes.js
const express = require('express');
const router = express.Router();
const alumniController = require('../controllers/Alumni_Controller.js');
// const upload = require('../middleware/upload'); // For handling profile photos

// Define routes
router.get('/', alumniController.getAllAlumni);
router.post('/', upload.single('profile_photo'), alumniController.createAlumni);
router.get('/:id', alumniController.getAlumniById);
router.put(
	'/:id',
	upload.single('profile_photo'),
	alumniController.updateAlumni
);
router.delete('/:id', alumniController.deleteAlumni);

module.exports = router;
