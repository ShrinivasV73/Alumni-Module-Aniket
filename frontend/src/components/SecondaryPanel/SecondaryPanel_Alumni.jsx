import { ImageHolder } from '../ImageHolder/ImageHolder.jsx';
import { DonationSection_Alumni } from '../DonationSection/DonationSection_Alumni.jsx';
import './SecondaryPanel.css';

const SecondaryPanel_Alumni = () => {
	return (
		<div className='secondary-panel'>
			<ImageHolder />
			<DonationSection_Alumni />
		</div>
	);
};

export { SecondaryPanel_Alumni };
