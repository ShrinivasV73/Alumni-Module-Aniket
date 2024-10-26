import { FiltersPanel } from '../components/FiltersPanel/FiltersPanel.jsx';
import { MainSection } from '../components/MainSection/MainSection.jsx';

import './InitialDashboard_Officer.css';

const InitialDashboard_Officer = () => {
	return (
		<div className='dashboard-container'>
			<FiltersPanel />
			<MainSection />
		</div>
	);
};

export { InitialDashboard_Officer };
