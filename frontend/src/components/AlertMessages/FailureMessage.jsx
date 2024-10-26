// ----------------------------------------
// Importing Components from react-boostrap
import { Alert } from "react-bootstrap";
// ----------------------------------------------------------------
// Importing Custom Stlyes that override the react-bootstrap styles
// import './SuccessMessage.css';
import styles from "./FailureMessage.module.css";

const FailureMessageFullWidth = ({ displayMessage }) => {
    return (
        <Alert
            variant="danger"
            className={`${styles.alert_message_full_width}`}
        >
            {displayMessage}
        </Alert>
    );
};

const FailureMessageEnoughWidth = ({ displayMessage }) => {
    return (
        <Alert variant="danger" className={styles.alert_message_enough_width}>
            {displayMessage}
        </Alert>
    );
};

export { FailureMessageFullWidth, FailureMessageEnoughWidth };
