import { Container, Row, Col } from 'react-bootstrap';
import { STUDENT_OBJECT } from '../../dummyData.js';

import './EducationalStatusInstance.css';

const EducationalStatusInstance_Officer = ({
	admissionYear,
	passingYear,
	degreeProgram,
	departmentOrSpecialization,
	collegeOrInstituteName,
	univerversityName,
	location
}) => {
	return (
		<Container>
			<Row>
				<Col>
					<strong>Admission Year:</strong>
					<p>{admissionYear}</p>
				</Col>
				<Col>
					<strong>Passing Year:</strong>
					<p>{passingYear}</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<strong>Degree Program:</strong>
					<p>{degreeProgram}</p>
				</Col>
				<Col>
					<strong>Department / Specialization:</strong>
					<p>{departmentOrSpecialization}</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<strong>College / Institute:</strong>
					<p>{collegeOrInstituteName}</p>
				</Col>
				<Col>
					<strong>University:</strong>
					<p>{univerversityName}</p>
				</Col>
			</Row>

			<Row>
				<Col>
					<strong>Location:</strong>
					<p>{location}</p>
				</Col>
			</Row>
		</Container>
	);
};

export { EducationalStatusInstance_Officer };
