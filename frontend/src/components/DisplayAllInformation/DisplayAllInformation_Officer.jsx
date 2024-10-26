import { SecondaryPanel_Officer } from '../SecondaryPanel/SecondaryPanel_Officer.jsx';
import { PrimaryPanel_Officer } from '../PrimaryPanel/PrimaryPanel_Officer.jsx';

import './DisplayAllInformation.css';

const DisplayAllInformation_Officer = () => {
	return (
		<div className='display-all-information'>
			<SecondaryPanel_Officer />
			<PrimaryPanel_Officer />
		</div>
	);
};

export { DisplayAllInformation_Officer };
