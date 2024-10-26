import './Typography.css';

const H1 = ({ text, children, classes }) => {
	return <h1 className={classes}>{text}</h1>;
};
const H2 = ({ text, children, classes }) => {
	return <h2 className={classes}>{text}</h2>;
};
const H3 = ({ text, children, classes }) => {
	return <h3 className={classes}>{text}</h3>;
};
const H4 = ({ text, children, classes }) => {
	return <h4 className={classes}>{text}</h4>;
};
const H5 = ({ text, children, classes }) => {
	return <h5 className={classes}>{text}</h5>;
};

const H6 = ({ text, children, classes }) => {
	return <h6 className={classes}>{text}</h6>;
};

export { H1, H2, H3, H4, H5, H6 };
