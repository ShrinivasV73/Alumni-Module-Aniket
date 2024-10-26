// import ButtonSecondary from "../Buttons/"
import { H1, H2, H3, H4, H5, H6 } from '../Typography/Typography.jsx';
import { BasicInformationInstance_Officer } from '../BasicInformationInstance/BasicInformationInstance_Officer.jsx';
import { STUDENT_OBJECT } from '../../dummyData.js';

import './BasicInformationSection.css';

const BasicInformationSection_Officer = () => {
	return (
		<section id='basic-information'>
			<H4
				text='Basic Information'
				classes={'text-align-left'}
			/>
			<div className='instance-container'>
				{STUDENT_OBJECT.BASIC_INFORMATION.map((basicInfo, index) => (
					<BasicInformationInstance_Officer
						key={index}
						{...basicInfo}
					/>
				))}
			</div>
		</section>
	);
};

export { BasicInformationSection_Officer };
