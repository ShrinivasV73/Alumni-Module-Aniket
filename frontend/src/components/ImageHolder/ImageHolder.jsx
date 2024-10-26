import profilePhoto from '../../assets/Professional-Pic-Squared.jpg';
import { ButtonSecondaryFullWidth } from '../Buttons/ButtonSecondary.jsx';
import './ImageHolder.css';

const ImageHolder = () => {
	return (
		<div className='image-holder'>
			<img
				src={profilePhoto}
				alt=''
				srcSet=''
			/>
			<ButtonSecondaryFullWidth
				text={'Close Profile'}
				variant={'outline-primary'}
			/>
		</div>
	);
};

export { ImageHolder };
