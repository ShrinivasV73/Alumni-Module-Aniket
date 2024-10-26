import { Button } from "react-bootstrap";
import { fullWidthButtonStyles, enoughWidthButtonStyles } from "./buttonStyles";

const ButtonPrimaryFullWidth = ({ text, type, variant, onButtonClick }) => {
    return (
        <Button
            style={fullWidthButtonStyles}
            variant={variant}
            type={type}
            onClick={onButtonClick}
        >
            {text}
        </Button>
    );
};

const ButtonPrimaryEnoughWidth = ({ text, type, variant, onButtonClick }) => {
    return (
        <Button
            style={enoughWidthButtonStyles}
            variant={variant}
            type={type}
            onClick={onButtonClick}
        >
            {text}
        </Button>
    );
};

export { ButtonPrimaryFullWidth, ButtonPrimaryEnoughWidth };
