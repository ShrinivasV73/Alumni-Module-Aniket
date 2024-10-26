import { Button } from "react-bootstrap";
import { fullWidthButtonStyles, enoughWidthButtonStyles } from "./buttonStyles";

const ButtonSecondaryFullWidth = ({ text, type, variant, onButtonClick }) => {
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

const ButtonSecondaryEnoughWidth = ({ text, type, variant, onButtonClick }) => {
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

export { ButtonSecondaryFullWidth, ButtonSecondaryEnoughWidth };
