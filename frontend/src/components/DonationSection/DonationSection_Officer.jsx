import { ButtonPrimaryFullWidth } from '../Buttons/ButtonPrimary.jsx';
import { H4 } from '../Typography/Typography.jsx';
import { DonationInstance } from '../DonationInstance/DonationInstance.jsx';
import { STUDENT_OBJECT } from '../../dummyData.js';

import './DonationSection.css';

const DonationSection_Officer = () => {
	return (
		<section className='donation-section'>
			{/**
			 * We're going to render the array of DonationInstance.
			 * For now we'll render only 1 donation instance.
			 *
			 */}
			<H4
				text='Donation Reports'
				classes={'text-align-left'}
			/>
			<div className='instance-container'>
				{STUDENT_OBJECT.DONATIONS.map((donation, index) => (
					<DonationInstance
						key={index}
						{...donation}
					/>
				))}
			</div>
		</section>
	);
};

export { DonationSection_Officer };
