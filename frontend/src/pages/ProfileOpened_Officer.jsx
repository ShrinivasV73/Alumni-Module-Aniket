import { FiltersPanel } from '../components/FiltersPanel/FiltersPanel.jsx';
import { DisplayAllInformation_Officer } from '../components/DisplayAllInformation/DisplayAllInformation_Officer.jsx';

import './ProfileOpened_Officer.css';

const ProfileOpened_Officer = () => {
	return (
		<div className='dashboard-container'>
			<FiltersPanel />
			<DisplayAllInformation_Officer />
		</div>
	);
};

export { ProfileOpened_Officer };
