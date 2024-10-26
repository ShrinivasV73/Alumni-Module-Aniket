
const AlumniOfficer = require('../models/AlumniOfficer');

exports.getAllAlumniOfficers = async (req, res) => {
	try {
		const officers = await AlumniOfficer.findAll();
		res.status(200).json(officers);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.createAlumniOfficer = async (req, res) => {
	try {
		const newOfficer = await AlumniOfficer.create(req.body);
		res.status(201).json(newOfficer);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.getAlumniOfficerById = async (req, res) => {
	try {
		const officer = await AlumniOfficer.findByPk(req.params.id);
		if (officer) {
			res.status(200).json(officer);
		} else {
			res.status(404).json({ message: 'Officer not found' });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.updateAlumniOfficer = async (req, res) => {
	try {
		const [updated] = await AlumniOfficer.update(req.body, {
			where: { officer_id: req.params.id }
		});
		if (updated) {
			const updatedOfficer = await AlumniOfficer.findByPk(req.params.id);
			res.status(200).json(updatedOfficer);
		} else {
			res.status(404).json({ message: 'Officer not found' });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.deleteAlumniOfficer = async (req, res) => {
	try {
		const deleted = await AlumniOfficer.destroy({
			where: { officer_id: req.params.id }
		});
		if (deleted) {
			res.status(204).json();
		} else {
			res.status(404).json({ message: 'Officer not found' });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
