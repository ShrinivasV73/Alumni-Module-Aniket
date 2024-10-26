import { BasicInformationSection_Alumni } from "../BasicInformationSection/BasicInformationSection_Alumni.jsx";
import { EmploymentStatusSection_Alumni } from "../EmploymentStatusSection/EmploymentStatusSection_Alumni.jsx";

import { AlumniContextProvider } from "../../store/AlumniContext.jsx";

import { EducationalStatusSection_Alumni } from "../EducationalStatusSection/EducationalStatusSection_Alumni.jsx";
import "./PrimaryPanel.css";

const PrimaryPanel_Alumni = () => {
    return (
        <div className="primary-panel">
            <AlumniContextProvider>
                <BasicInformationSection_Alumni />
                <EmploymentStatusSection_Alumni />
                <EducationalStatusSection_Alumni />
            </AlumniContextProvider>
        </div>
    );
};

export { PrimaryPanel_Alumni };
