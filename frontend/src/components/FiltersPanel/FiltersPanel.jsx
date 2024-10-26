import React from 'react';
import { Accordion, Form } from 'react-bootstrap';
import {
	departments,
	currentStatus,
	companies,
	gender
} from '../../dummyData.js';
import { H1, H2, H3, H4, H5, H6 } from '../Typography/Typography.jsx';
import { ButtonDarkFullWidth } from '../Buttons/ButtonDark.jsx';

import './FiltersPanel.css';

const FiltersPanel = () => {
	return (
		<div className='filters-panel'>
			<H4 text={`FILTER BY:`}></H4>
			<Accordion>
				<Accordion.Item eventKey='0'>
					<Accordion.Header>Departments</Accordion.Header>
					<Accordion.Body>
						<Form>
							{departments.map((dept) => (
								<div key={`default-checkbox`}>
									<Form.Check // prettier-ignore
										type={'checkbox'}
										id={`${dept}-checkbox`}
										label={`${dept}`}
									/>
								</div>
							))}
						</Form>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey='1'>
					<Accordion.Header>Current Status</Accordion.Header>
					<Accordion.Body>
						<Form>
							{currentStatus.map((currStatus) => (
								<div key={`default-checkbox`}>
									<Form.Check // prettier-ignore
										type={'checkbox'}
										id={`${currStatus}-checkbox`}
										label={`${currStatus}`}
									/>
								</div>
							))}
						</Form>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey='2'>
					<Accordion.Header>Company</Accordion.Header>
					<Accordion.Body>
						<Form>
							{companies.map((comp) => (
								<div key={`default-checkbox`}>
									<Form.Check // prettier-ignore
										type={'checkbox'}
										id={`${comp}-checkbox`}
										label={`${comp}`}
									/>
								</div>
							))}
						</Form>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey='3'>
					<Accordion.Header>Gender</Accordion.Header>
					<Accordion.Body>
						<Form>
							{gender.map((gen) => (
								<div key={`default-checkbox`}>
									<Form.Check // prettier-ignore
										type={'checkbox'}
										id={`${gen}-checkbox`}
										label={`${gen}`}
									/>
								</div>
							))}
						</Form>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
			<ButtonDarkFullWidth
				text={`Apply Filters`}
				variant='dark'
			/>
		</div>
	);
};

export { FiltersPanel };
