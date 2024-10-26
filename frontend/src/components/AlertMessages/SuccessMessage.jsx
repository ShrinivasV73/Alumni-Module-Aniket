// ----------------------------------------
// Importing Components from react-boostrap
import { Alert } from "react-bootstrap";
// ----------------------------------------------------------------
// Importing Custom Stlyes that override the react-bootstrap styles
// import './SuccessMessage.css';
import "./SuccessMessage.css";

const SuccessMessage = ({ displayMessage }) => {
    return (
        <Alert variant="success" className="alert-message small">
            {displayMessage}
        </Alert>
    );
};

export { SuccessMessage };
