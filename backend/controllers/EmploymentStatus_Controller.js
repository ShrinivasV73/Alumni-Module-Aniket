
const EmploymentStatus = require('../models/EmploymentStatus');

exports.getAllEmploymentStatuses = async (req, res) => {
	try {
		const statuses = await EmploymentStatus.findAll();
		res.status(200).json(statuses);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.createEmploymentStatus = async (req, res) => {
	try {
		const newStatus = await EmploymentStatus.create(req.body);
		res.status(201).json(newStatus);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.getEmploymentStatusById = async (req, res) => {
	try {
		const status = await EmploymentStatus.findByPk(req.params.id);
		if (status) {
			res.status(200).json(status);
		} else {
			res.status(404).json({ message: 'Status not found' });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.updateEmploymentStatus = async (req, res) => {
	try {
		const [updated] = await EmploymentStatus.update(req.body, {
			where: { status_id: req.params.id }
		});
		if (updated) {
			const updatedStatus = await EmploymentStatus.findByPk(
				req.params.id
			);
			res.status(200).json(updatedStatus);
		} else {
			res.status(404).json({ message: 'Status not found' });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.deleteEmploymentStatus = async (req, res) => {
	try {
		const deleted = await EmploymentStatus.destroy({
			where: { status_id: req.params.id }
		});
		if (deleted) {
			res.status(204).json();
		} else {
			res.status(404).json({ message: 'Status not found' });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
