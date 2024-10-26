import { H1, H2, H3, H4, H5, H6 } from '../Typography/Typography.jsx';
import { EducationalStatusInstance_Officer } from '../EducationalStatusInstance/EducationalStatusInstance_Officer.jsx';
// import { ButtonPrimaryFullWidth } from '../Buttons/ButtonPrimary.jsx';

import './EducationalStatusSection.css';
import { STUDENT_OBJECT } from '../../dummyData.js';

const EducationalStatusSection_Officer = () => {
	return (
		<section id='educational-status-section'>
			<H4
				text='Educational Status'
				classes={'text-align-left'}
			/>

			<div className='instance-container'>
				{STUDENT_OBJECT.EDUCATIONAL_QUALIFICATIONS.map((edu, index) => (
					<EducationalStatusInstance_Officer
						key={index}
						{...edu}
					/>
				))}
			</div>
		</section>
	);
};

export { EducationalStatusSection_Officer };
