import { useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { H4 } from "../Typography/Typography.jsx";
import { EmploymentStatusInstance_Alumni } from "../EmploymentStatusInstance/EmploymentStatusInstance_Alumni.jsx";
import { ButtonDarkFullWidth } from "../Buttons/ButtonDark.jsx";

//
import { AlumniContext } from "../../store/AlumniContext.jsx";

// Importing Dummy Data
import {
    STUDENT_OBJECT,
    updateEmploymentInformation,
    displayEmploymentInformation,
} from "../../dummyData_New.js";

const EmploymentStatusSection_Alumni = () => {
    // Consume context values
    const {
        employmentInstances,
        isAdding,
        handleAddEmploymentStatus,
        confirmStatus,
        cancelAdding,
    } = useContext(AlumniContext);

    return (
        <section id="employment-status-section">
            <H4 text="Employment Status" classes={"text-align-left"} />
            <ButtonDarkFullWidth
                text={"Add New Employment Experience"}
                variant={"outline-dark"}
                onButtonClick={handleAddEmploymentStatus}
            />
            <div className="instance-container">
                {employmentInstances.map((emp, index) => (
                    <EmploymentStatusInstance_Alumni
                        key={index}
                        {...emp}
                        elementIndex={index}
                        confirmStatus={confirmStatus}
                    />
                ))}
                {isAdding && (
                    <EmploymentStatusInstance_Alumni
                        confirmStatus={confirmStatus}
                        cancel={cancelAdding}
                        elementIndex={employmentInstances.length}
                        isRenderedEditable={true}
                        isAdding={isAdding}
                    />
                )}
            </div>
        </section>
    );
};

export { EmploymentStatusSection_Alumni };
