// routes/employmentStatusRoutes.js
const express = require('express');
const router = express.Router();
const employmentStatusController = require('../controllers/employmentStatusController');

// Define routes
router.get('/', employmentStatusController.getAllEmploymentStatuses);
router.post('/', employmentStatusController.createEmploymentStatus);
router.get('/:id', employmentStatusController.getEmploymentStatusById);
router.put('/:id', employmentStatusController.updateEmploymentStatus);
router.delete('/:id', employmentStatusController.deleteEmploymentStatus);

module.exports = router;
