import { ImageHolder } from '../ImageHolder/ImageHolder.jsx';
import { DonationSection_Officer } from '../DonationSection/DonationSection_Officer.jsx';
import './SecondaryPanel.css';

const SecondaryPanel_Officer = () => {
	return (
		<div className='secondary-panel'>
			<ImageHolder />
			<DonationSection_Officer />
		</div>
	);
};

export { SecondaryPanel_Officer };
