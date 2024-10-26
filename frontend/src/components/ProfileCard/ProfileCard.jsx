import { H5 } from '../Typography/Typography.jsx';
import { ButtonPrimaryFullWidth } from '../Buttons/ButtonPrimary.jsx';
import sampleImage from '../../assets/Sample-Image.png';
import './ProfileCard.css';

const ProfileCard = () => {
	return (
		<div className='profile-card'>
			<img
				src={sampleImage}
				alt=''
			/>
			<div className='year-dept-wrapper'>
				<H5 text={`Roach Anderson`}></H5>
				<p className='small'>{`2024`}</p>
				<p className='small'>{`Computer Science and Engineering`}</p>
			</div>
			<ButtonPrimaryFullWidth
				text={`View Profile`}
				variant={'outline-primary'}
			/>
		</div>
	);
};

export { ProfileCard };
