import { H1, H2, H3, H4, H5, H6 } from '../Typography/Typography.jsx';
import { EmploymentStatusInstance_Officer } from '../EmploymentStatusInstance/EmploymentStatusInstance_Officer.jsx';
// import { ButtonPrimaryFullWidth } from '../Buttons/ButtonPrimary.jsx';
import { STUDENT_OBJECT } from '../../dummyData.js';

import './EmploymentStatusSection.css';

const EmploymentStatusSection_Officer = () => {
	return (
		<section id='employment-status-section'>
			<H4
				text='Employment Status'
				classes={'text-align-left'}
			/>
			<div className='instance-container'>
				{STUDENT_OBJECT.EMPLOYMENT_INFORMATION.map((emp, index) => (
					<EmploymentStatusInstance_Officer
						key={index}
						{...emp}
					/>
				))}
			</div>
		</section>
	);
};

export { EmploymentStatusSection_Officer };
