import React, { createContext, useState } from "react";
import {
    displayBasicInformation,
    updateBasicInformation,
    displayEmploymentInformation,
    updateEmploymentInformation,
    displayEducationInformation,
    updateEducationInformation,
} from "../dummyData_New.js";

// Create the AlumniContext
const AlumniContext = createContext();

const AlumniContextProvider = ({ children }) => {
    // State and functions for Employment Status
    const [employmentInstances, setEmploymentStatusInstances] = useState(
        displayEmploymentInformation()
    );

    const confirmEmploymentStatus = (formData, elementIndex, isAdding) => {
        let updatedInstances = employmentInstances;
        if (isAdding) {
            updatedInstances = [...employmentInstances, formData];
        } else {
            updatedInstances[elementIndex] = formData;
        }
        setEmploymentStatusInstances(updatedInstances);
        updateEmploymentInformation(updatedInstances);
    };

    // State and functions for Educational Status
    const [educationalInstances, setEducationalStatusInstances] = useState(
        displayEducationInformation()
    );

    const confirmEducationalStatus = (formData, elementIndex, isAdding) => {
        let updatedInstances = educationalInstances;
        if (isAdding) {
            updatedInstances = [...educationalInstances, formData];
        } else {
            updatedInstances[elementIndex] = formData;
        }
        setEducationalStatusInstances(updatedInstances);
        updateEducationInformation(updatedInstances);
    };

    // State and functions for Basic Information
    const [basicInfoInstances, setBasicInfoInstance] = useState(
        displayBasicInformation()
    );
    const [isAddingBasicInfo, setIsAddingBasicInfo] = useState(false);

    const confirmBasicInformation = (formData, elementIndex) => {
        let updatedInstances = basicInfoInstances;
        if (isAddingBasicInfo) {
            updatedInstances = [...basicInfoInstances, formData];
        } else {
            updatedInstances[elementIndex] = formData;
        }

        setBasicInfoInstance(updatedInstances);
        updateBasicInformation(updatedInstances);

        // Reset the adding state after confirmation
        setIsAddingBasicInfo(false);
    };

    const cancelAddingBasicInfo = () => {
        setIsAddingBasicInfo(false);
    };

    // Provide context values
    return (
        <AlumniContext.Provider
            value={{
                employmentInstances,
                confirmEmploymentStatus,
                educationalInstances,
                confirmEducationalStatus,
                basicInfoInstances,
                confirmBasicInformation,
                isAddingBasicInfo,
                setIsAddingBasicInfo,
                cancelAddingBasicInfo,
            }}
        >
            {children}
        </AlumniContext.Provider>
    );
};

export { AlumniContext, AlumniContextProvider };
