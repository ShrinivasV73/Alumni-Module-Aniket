import { SecondaryPanel_Alumni } from "../SecondaryPanel/SecondaryPanel_Alumni.jsx";
import { PrimaryPanel_Alumni } from "../PrimaryPanel/PrimaryPanel_Alumni.jsx";

import "./DisplayAllInformation.css";

const DisplayAllInformation_Alumni = () => {
    return (
        <div className="display-all-information">
            <SecondaryPanel_Alumni />
            <PrimaryPanel_Alumni />
        </div>
    );
};

export { DisplayAllInformation_Alumni };
