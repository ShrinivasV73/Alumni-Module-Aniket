// routes/educationalQualificationRoutes.js
const express = require('express');
const router = express.Router();
const educationalQualificationController = require('../controllers/educationalQualificationController');

// Define routes
router.get(
	'/',
	educationalQualificationController.getAllEducationalQualifications
);
router.post(
	'/',
	educationalQualificationController.createEducationalQualification
);
router.get(
	'/:id',
	educationalQualificationController.getEducationalQualificationById
);
router.put(
	'/:id',
	educationalQualificationController.updateEducationalQualification
);
router.delete(
	'/:id',
	educationalQualificationController.deleteEducationalQualification
);

module.exports = router;
