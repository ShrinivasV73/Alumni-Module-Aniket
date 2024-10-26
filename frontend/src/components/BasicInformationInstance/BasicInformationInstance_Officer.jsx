import { Container, Row, Col } from 'react-bootstrap';
import { ButtonSecondaryEnoughWidth } from '../Buttons/ButtonSecondary.jsx';
import { STUDENT_OBJECT } from '../../dummyData.js';

import './BasicInformationInstance.css';

const BasicInformationInstance_Officer = ({
	fullName,
	yearOfPassing,
	alumniId,
	enrollmentNo,
	program,
	department,
	email,
	phoneNo,
	currentStatus,
	gender,
	address
}) => {
	return (
		<Container>
			<Row>
				<Col>
					<strong>Full Name:</strong>
					<p>{fullName}</p>
				</Col>
				<Col>
					<strong>Year of Passing:</strong>
					<p>{yearOfPassing}</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<strong>Alumni ID:</strong>
					<p>{alumniId}</p>
				</Col>
				<Col>
					<strong>Enrollment No:</strong>
					<p>{enrollmentNo}</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<strong>Program:</strong>
					<p>{program}</p>
				</Col>
				<Col>
					<strong>Department:</strong>
					<p>{department}</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<strong>Email:</strong>
					<p>{email}</p>
				</Col>
				<Col>
					<strong>Phone No:</strong>
					<p>{phoneNo}</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<strong>Current Status:</strong>
					<p>{currentStatus}</p>
				</Col>
				<Col>
					<strong>Gender:</strong>
					<p>{gender}</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<strong>Address:</strong>
					<p>{address}</p>
				</Col>
			</Row>
		</Container>
	);
};

export { BasicInformationInstance_Officer };
