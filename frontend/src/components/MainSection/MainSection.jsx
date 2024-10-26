// import React from "react-bootstrap";
import { SearchPanel } from '../SearchPanel/SearchPanel.jsx';
import { ProfileCardsContainer } from '../ProfileCardsContainer/ProfileCardsContainer.jsx';
const MainSection = () => {
	return (
		<main className='main-section'>
			<SearchPanel />
			<ProfileCardsContainer />
		</main>
	);
};

export { MainSection };
