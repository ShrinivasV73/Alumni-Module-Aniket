// ----------------------------------------
// Importing Components from react-boostrap
import {
    Button,
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
import { ButtonDarkFullWidth } from "../components/Buttons/ButtonDark.jsx";
import { SuccessMessage } from "../components/AlertMessages/SuccessMessage.jsx";
import { FailureMessageFullWidth } from "../components/AlertMessages/FailureMessage.jsx";

//
import { useNavigate } from "@tanstack/react-router";

// ----------------------------------------------------------------
// Importing Custom Stlyes that override the react-bootstrap styles
import "./FormPageStyles.css";

const RegisterPage = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        // Logic for registering goes here
        navigate({ to: "/login" }); // Navigate to the LoginPage after successful registration
    };

    return (
        <Form className="mb-3 form d-grid">
            <FormGroup className="form-group">
                <H3 text={"Registration Form"} classes={"text-align-center"} />
            </FormGroup>
            <FormGroup className="form-group" controlId="formBasicEmail">
                <FormLabel className="label-text">Enrollment No.</FormLabel>
                <FormControl type="text" />
            </FormGroup>
            <FormGroup className="form-group" controlId="formBasicEmail">
                <FormLabel className="label-text">E-mail</FormLabel>
                <FormControl type="email" />
            </FormGroup>
            <FormGroup className="form-group">
                <FormText id="passwordHelpBlock">
                    Already have an Account? <a href="">Login</a>
                </FormText>
            </FormGroup>
            <FormGroup className="form-group">
                <ButtonPrimaryFullWidth
                    buttonText={"Register"}
                    variant={"primary"}
                    type={"submit"}
                    onButtonClick={handleRegister}
                />
            </FormGroup>
        </Form>
    );
};

export { RegisterPage };
