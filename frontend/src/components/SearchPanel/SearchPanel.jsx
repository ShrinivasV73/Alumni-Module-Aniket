import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { ButtonPrimaryFullWidth } from '../Buttons/ButtonPrimary';
import '../SearchPanel/SearchPanel.css';

const SearchPanel = () => {
	return (
		<div className='search-panel'>
			<Form>
				<FormGroup
					className='input-label-container'
					controlId='exampleForm.ControlInput1'>
					<FormLabel>Alumni's Full Name</FormLabel>
					<FormControl
						type='email'
						placeholder='name@example.com'
					/>
				</FormGroup>
				<FormGroup className='button-container'>
					<ButtonPrimaryFullWidth text={'Search Alumni'} />
				</FormGroup>
			</Form>
		</div>
	);
};

export { SearchPanel };
