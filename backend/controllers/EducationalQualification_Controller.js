
const EducationalQualification = require('../models/EducationalQualification');

exports.getAllEducationalQualifications = async (req, res) => {
	try {
		const qualifications = await EducationalQualification.findAll();
		res.status(200).json(qualifications);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.createEducationalQualification = async (req, res) => {
	try {
		const newQualification = await EducationalQualification.create(
			req.body
		);
		res.status(201).json(newQualification);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.getEducationalQualificationById = async (req, res) => {
	try {
		const qualification = await EducationalQualification.findByPk(
			req.params.id
		);
		if (qualification) {
			res.status(200).json(qualification);
		} else {
			res.status(404).json({ message: 'Qualification not found' });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.updateEducationalQualification = async (req, res) => {
	try {
		const [updated] = await EducationalQualification.update(req.body, {
			where: { qualification_id: req.params.id }
		});
		if (updated) {
			const updatedQualification =
				await EducationalQualification.findByPk(req.params.id);
			res.status(200).json(updatedQualification);
		} else {
			res.status(404).json({ message: 'Qualification not found' });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.deleteEducationalQualification = async (req, res) => {
	try {
		const deleted = await EducationalQualification.destroy({
			where: { qualification_id: req.params.id }
		});
		if (deleted) {
			res.status(204).json();
		} else {
			res.status(404).json({ message: 'Qualification not found' });
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
