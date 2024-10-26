// ----------------------------------------
// Importing Components from react-boostrap
import {
    Form,
    FormGroup,
    FormLabel,
    FormControl,
    FormText,
} from "react-bootstrap";

// -----------------------------------------------------
// Importing User-Defined Components from react-boostrap
import {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
} from "../components/Typography/Typography.jsx";
import { ButtonPrimaryFullWidth } from "../components/Buttons/ButtonPrimary.jsx";
import { SuccessMessage } from "../components/AlertMessages/SuccessMessage.jsx";
import { FailureMessageEnoughWidth } from "../components/AlertMessages/FailureMessage.jsx";

//
import { useNavigate } from "@tanstack/react-router";

// ----------------------------------------------------------------
// Importing Custom Stlyes that override the react-bootstrap styles
import "./FormPageStyles.css";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Logic for login goes here
        navigate({ to: "/profile/alumni" }); // Navigate to the ProfileOpened_Alumni after successful login
    };

    return (
        <Form className="mb-3 form d-grid">
            <FormGroup className="form-group">
                <H3 text={"Login Form"} classes={"text-align-center"} />
            </FormGroup>
            <FormGroup className="form-group" controlId="formBasicEmail">
                <FormLabel className="label-text">E-mail</FormLabel>
                <FormControl type="email" />
            </FormGroup>
            <FormGroup className="form-group" controlId="formBasicPassword">
                <FormLabel>Password</FormLabel>
                <FormControl type="password" />
                <FormText id="passwordHelpBlock" className="forgotPassword">
                    <a href="">Forgot Password?</a>
                </FormText>
            </FormGroup>

            <FormGroup className="form-group">
                <FormText id="passwordHelpBlock">
                    Do not have an Account? <a href="">Register</a>
                </FormText>
            </FormGroup>
            <FormGroup className="form-group">
                <ButtonPrimaryFullWidth text={"Login"} type={"submit"} />
            </FormGroup>
        </Form>
    );
};

export { LoginPage };
