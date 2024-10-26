import { BasicInformationSection_Officer } from '../BasicInformationSection/BasicInformationSection_Officer.jsx';
import { EmploymentStatusSection_Officer } from '../EmploymentStatusSection/EmploymentStatusSection_Officer.jsx';
import { EducationalStatusSection_Officer } from '../EducationalStatusSection/EducationalStatusSection_Officer.jsx';
import './PrimaryPanel.css';

const PrimaryPanel_Officer = () => {
	return (
		<div className='primary-panel'>
			<BasicInformationSection_Officer />
			<EmploymentStatusSection_Officer />
			<EducationalStatusSection_Officer />
		</div>
	);
};

export { PrimaryPanel_Officer };
