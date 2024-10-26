export const departments = [
	'Computer Science & Engineering',
	'Mechanical Engineeing',
	'Civil Engineering',
	'Automobile Engineering',
	'Information Technology',
	'Electronics & Telecommunication Engineering',
];
export const currentStatus = [
	'Student pursuing Higher Education',
	'Employee',
	'Ecntrepreneur',
	'Others',
];
export const companies = [
	"Byju's",
	'Ola',
	'Paytm',
	'Zomato',
	'Swiggy',
	'Flipkart',
	'Razorpay',
	'CRED',
	'Oyo Rooms',
	'Freshworks',
	'Dream11',
	'PhonePe',
	'Urban Company',
	'BigBasket',
	'PolicyBazaar',
	'Delhivery',
	'Nykaa',
	'Udaan',
	'Lenskart',
	'Unacademy',
];

export const gender = ['male', 'female', 'other'];

// export

export const STUDENT_OBJECT = {
	BASIC_INFORMATION: [
		{
			fullName: 'Shrinivas Sudhakar Vishnupurikar',
			yearOfPassing: 2020,
			alumniId: 234567,
			enrollmentNo: 'VWXY890123456789',
			program: 'Diploma in Engineering',
			department: 'Computer Engineering',
			email: 'shrinivasv73@gmail.com',
			phoneNo: '+91 8080987809',
			currentStatus: 'Corporate Employee',
			gender: 'Male',
			address:
				'201, 78, Vasantsudha Residency, Behind Nana-Nani Park, Panchavati Colony, Talegaon Dabhade, Maval, Pune — 410506',
		},
	],
	EMPLOYMENT_INFORMATION: [
		{
			employeeId: 'PQR8080687809',
			companyName: 'AiAdventures',
			yearsOfExperience: 1,
			designation: 'Python Instructor Intern',
			companyLocation: 'Shivajinagar, Pune',
			industry: 'Education Industry',
		},
		{
			employeeId: 'GDIOT06',
			companyName: 'GDIOT',
			yearsOfExperience: 0,
			designation: 'Data Analyst',
			companyLocation: 'Balewadi High Street, Balewadi, Pune',
			industry: 'Education Industry',
		},
		{
			employeeId: 'EMP9876543',
			companyName: 'Bynaric System',
			yearsOfExperience: 3,
			designation: 'Software Engineer',
			companyLocation: '3rd Floor, Dhananjay Complex, Baner Road, Pune',
			industry: 'Service Industry',
		},
	],
	EDUCATIONAL_QUALIFICATIONS: [
		{
			admissionYear: 2021,
			passingYear: 2024,
			degreeProgram: 'Bachelors of Technology',
			departmentOrSpecialization: 'Computer Engineering',
			collegeOrInstituteName: 'College of Engineering, Pune',
			univerversityName: 'Savitribai Phule University',
			location: 'Pune, India',
			elementIndex: 1,
		},
		{
			admissionYear: 2024,
			passingYear: 2026,
			degreeProgram: 'Masters of Science',
			departmentOrSpecialization: 'Cloud Computing',
			collegeOrInstituteName: 'Technical University of Munich',
			univerversityName: 'Technical University of Munich',
			location: 'Munich, Germany',
			elementIndex: 0,
		},
	],
	DONATIONS: [
		{
			purposeOfDonation: 'Library Fund',
			transactionID: 'TXN0012345',
			dateOfTransaction: '2024-01-20',
			donationAmount: 6000,
		},
		{
			purposeOfDonation: 'Scholarship Program',
			transactionID: 'TXN0012346',
			dateOfTransaction: '2024-02-15',
			donationAmount: 31000,
		},
		{
			purposeOfDonation: 'Research Grant',
			transactionID: 'TXN0012347',
			dateOfTransaction: '2024-03-10',
			donationAmount: 15000,
		},
		{
			purposeOfDonation: 'Alumni Activities',
			transactionID: 'TXN0012348',
			dateOfTransaction: '2024-04-05',
			donationAmount: 7500,
		},
	],
};

/**
 * EMPLOYMENT Related Methods
 */
const displayBasicInformation = () => {
	return STUDENT_OBJECT.BASIC_INFORMATION;
};

const updateBasicInformation = (updatedInfo) => {
	STUDENT_OBJECT.BASIC_INFORMATION = updatedInfo;
};

/**
 * EMPLOYMENT Related Methods
 */
const displayEmploymentInformation = () => {
	return STUDENT_OBJECT.EMPLOYMENT_INFORMATION;
};

const updateEmploymentInformation = (newEmploymentInformation) => {
	STUDENT_OBJECT.EMPLOYMENT_INFORMATION = newEmploymentInformation;
};

/**
 * EDUCATION Related Methods
 */

const displayEducationInformation = () => {
	return STUDENT_OBJECT.EDUCATIONAL_QUALIFICATIONS;
};

const updateEducationInformation = (newEducationalInformation) => {
	STUDENT_OBJECT.EDUCATIONAL_QUALIFICATIONS = newEducationalInformation;
};

/**
 * EDUCATION Related Methods
 */

export {
	//
	displayBasicInformation,
	updateBasicInformation,
	//
	updateEmploymentInformation,
	displayEmploymentInformation,
	//
	updateEducationInformation,
	displayEducationInformation,
};
