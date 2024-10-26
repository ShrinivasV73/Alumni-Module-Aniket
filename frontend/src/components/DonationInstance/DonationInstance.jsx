import { H1, H2, H3, H4, H5, H6 } from '../Typography/Typography.jsx';
import './DonationInstance.css';

const DonationInstance = ({
	purposeOfDonation,
	transactionID,
	dateOfTransaction,
	donationAmount
}) => {
	return (
		<div className='donation-instance'>
			<div className='purpose-id-wrapper'>
				<strong>{purposeOfDonation}</strong>
				<p className='small'>{transactionID}</p>
			</div>
			<hr />
			<div className='date-amount-wrapper'>
				<p className='small'>{dateOfTransaction}</p>
				<strong className='small'>{`₹${donationAmount}`}</strong>
			</div>
		</div>
	);
};

export { DonationInstance };
