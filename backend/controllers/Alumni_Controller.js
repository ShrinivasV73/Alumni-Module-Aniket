const Alumni = require('../models/Alumni');

exports.getAllAlumni = async (req, res) => {
	try {
		const alumni = await Alumni.findAll();
		res.status(200).json(alumni);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.createAlumni = async (req, res) => {
	try {
		const newAlumni = await Alumni.create(req.body);
		res.status(201).json(newAlumni);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.getAlumniById = async (req, res) => {
	try {
		const alumni = await Alumni.findByPk(req.params.id);
		if (alumni) {
			res.status(200).json(alumni);
		} else {
			res.status(404).json({ message: 'Alumni not found' });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.updateAlumni = async (req, res) => {
	try {
		const [updated] = await Alumni.update(req.body, {
			where: { alumni_id: req.params.id }
		});
		if (updated) {
			const updatedAlumni = await Alumni.findByPk(req.params.id);
			res.status(200).json(updatedAlumni);
		} else {
			res.status(404).json({ message: 'Alumni not found' });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.deleteAlumni = async (req, res) => {
	try {
		const deleted = await Alumni.destroy({
			where: { alumni_id: req.params.id }
		});
		if (deleted) {
			res.status(204).json();
		} else {
			res.status(404).json({ message: 'Alumni not found' });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
