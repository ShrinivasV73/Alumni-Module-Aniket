import React from 'react';
import { ProfileCard } from '../ProfileCard/ProfileCard.jsx';
import './ProfileCardsContainer.css';

const ProfileCardsContainer = ({ profiles }) => {
	return (
		<>
			<div className='profile-cards-container'>
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
				<ProfileCard />
			</div>
		</>
	);
};

export { ProfileCardsContainer };
