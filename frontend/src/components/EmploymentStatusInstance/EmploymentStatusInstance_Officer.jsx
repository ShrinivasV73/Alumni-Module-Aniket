import { Container, Row, Col } from 'react-bootstrap';

import './EmploymentStatusInstance.css';

const EmploymentStatusInstance_Officer = ({
	employeeId,
	companyName,
	yearsOfExperience,
	designation,
	companyLocation,
	industry
}) => {
	return (
		<Container>
			<Row>
				<Col>
					<strong>Employee ID:</strong>
					<p>{employeeId}</p>
				</Col>
				<Col>
					<strong>Company:</strong>
					<p>{companyName}</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<strong>Years of Experience:</strong>
					<p>{yearsOfExperience}</p>
				</Col>
				<Col>
					<strong>Designation:</strong>
					<p>{designation}</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<strong>Location:</strong>
					<p>{companyLocation}</p>
				</Col>
				<Col>
					<strong>Industry:</strong>
					<p>{industry}</p>
				</Col>
			</Row>
		</Container>
	);
};

export { EmploymentStatusInstance_Officer };
