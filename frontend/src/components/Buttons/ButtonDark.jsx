import { Button } from "react-bootstrap";
import { fullWidthButtonStyles, enoughWidthButtonStyles } from "./buttonStyles";

const ButtonDarkFullWidth = ({ text, type, variant, onButtonClick }) => {
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

const ButtonDarkEnoughWidth = ({ text, type, variant }) => {
    return (
        <Button style={enoughWidthButtonStyles} variant={variant} type={type}>
            {text}
        </Button>
    );
};

export { ButtonDarkFullWidth, ButtonDarkEnoughWidth };
