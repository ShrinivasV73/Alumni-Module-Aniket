import React, { useState, useEffect, useRef, useContext } from "react";
import {
    Container,
    Row,
    Col,
    Form,
    FormControl,
    FormSelect,
} from "react-bootstrap";
import { ButtonSecondaryEnoughWidth } from "../Buttons/ButtonSecondary.jsx";

import {
    FailureMessageEnoughWidth,
    FailureMessageFullWidth,
} from "../AlertMessages/FailureMessage.jsx";

import "./EmploymentStatusInstance.css";

import { AlumniContext } from "../../store/AlumniContext.jsx";

import {
    STUDENT_OBJECT,
    updateEmploymentInformation,
    displayEmploymentInformation,
} from "../../dummyData_New.js";

// const yearsArray = [...Array(40).keys()].map((year) => year + 1);
const yearsArray = [...Array(41).keys()];

const EmploymentStatusInstance_Alumni = ({
    employeeId,
    companyName,
    yearsOfExperience,
    designation,
    companyLocation,
    industry,
    confirmStatus,
    elementIndex,
    isAdding,
    cancel,
    isRenderedEditable = false,
}) => {
    // Initialize state with props values
    const [displayValues, setDisplayValues] = useState({
        employeeId,
        companyName,
        yearsOfExperience,
        designation,
        companyLocation,
        industry,
    });

    // Use refs to track the input elements
    const employeeIdRef = useRef(employeeId);
    const companyNameRef = useRef(companyName);
    const yearsOfExperienceRef = useRef(yearsOfExperience);
    const designationRef = useRef(designation);
    const companyLocationRef = useRef(companyLocation);
    const industryRef = useRef(industry);

    //
    const [isEditing, setIsEditing] = useState(false);

    //
    const [isFormInvalid, setIsFormInvalid] = useState(false);

    //
    useEffect(() => {
        if (isRenderedEditable) {
            setIsEditing(true);
        }
    }, [isRenderedEditable]);

    //
    const handleConfirmClick = () => {
        if (!isEditing) {
            // First click: enter editing mode
            setIsEditing(true);
        } else {
            // Extracting values from refs on button click
            const formData = {
                employeeId: employeeIdRef.current.value,
                companyName: companyNameRef.current.value,
                yearsOfExperience: yearsOfExperienceRef.current.value,
                designation: designationRef.current.value,
                companyLocation: companyLocationRef.current.value,
                industry: industryRef.current.value,
            };
            // Validate form data on subsequent clicks
            if (Object.values(formData).includes("")) {
                setIsFormInvalid(true);
            } else {
                setIsFormInvalid(false);
                confirmStatus(formData, elementIndex);
                // Exit editing mode only if form is valid
                setIsEditing(false);
                // Update display values when confirming changes
                setDisplayValues(formData);
            }
        }
    };

    //
    const cancelEditing = () => {
        setIsEditing(false); // Cancel editing new instance
    };

    //
    return (
        <Container className="employment-status-instance">
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>
                            <strong>Employee ID:</strong>
                        </Form.Label>
                        {isEditing ? (
                            <FormControl
                                type="text"
                                name="employeeId"
                                defaultValue={displayValues.employeeId}
                                ref={employeeIdRef}
                            />
                        ) : (
                            <p>{displayValues.employeeId}</p>
                        )}
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>
                            <strong>Company:</strong>
                        </Form.Label>
                        {isEditing ? (
                            <FormControl
                                type="text"
                                name="companyName"
                                defaultValue={displayValues.companyName}
                                ref={companyNameRef}
                            />
                        ) : (
                            <p>{displayValues.companyName}</p>
                        )}
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>
                            <strong>Years of Experience:</strong>
                        </Form.Label>
                        {isEditing ? (
                            <FormSelect
                                type="number"
                                name="yearsOfExperience"
                                defaultValue={displayValues.yearsOfExperience}
                                ref={yearsOfExperienceRef}
                            >
                                {yearsArray.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </FormSelect>
                        ) : (
                            <p>{displayValues.yearsOfExperience}</p>
                        )}
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>
                            <strong>Designation:</strong>
                        </Form.Label>
                        {isEditing ? (
                            <FormControl
                                type="text"
                                name="designation"
                                defaultValue={displayValues.designation}
                                ref={designationRef}
                            />
                        ) : (
                            <p>{displayValues.designation}</p>
                        )}
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>
                            <strong>Location:</strong>
                        </Form.Label>
                        {isEditing ? (
                            <FormControl
                                type="text"
                                name="companyLocation"
                                defaultValue={displayValues.companyLocation}
                                ref={companyLocationRef}
                            />
                        ) : (
                            <p>{displayValues.companyLocation}</p>
                        )}
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>
                            <strong>Industry:</strong>
                        </Form.Label>
                        {isEditing ? (
                            <FormControl
                                type="text"
                                name="industry"
                                defaultValue={displayValues.industry}
                                ref={industryRef}
                            />
                        ) : (
                            <p>{displayValues.industry}</p>
                        )}
                    </Form.Group>
                </Col>
            </Row>
            {isFormInvalid && (
                <Row>
                    <Col>
                        <FailureMessageEnoughWidth displayMessage="Fill Up All The Fields" />
                    </Col>
                </Row>
            )}

            <Row>
                <Col>
                    <ButtonSecondaryEnoughWidth
                        text={
                            isEditing
                                ? "Confirm and Save Changes"
                                : "Edit Employment Information"
                        }
                        variant={"secondary"}
                        onButtonClick={(event) => handleConfirmClick(event)}
                    />
                </Col>
                <Col>
                    {isEditing ? (
                        <ButtonSecondaryEnoughWidth
                            text="Cancel"
                            variant={"secondary"}
                            onButtonClick={isAdding ? cancel : cancelEditing}
                        />
                    ) : undefined}
                </Col>
            </Row>
        </Container>
    );
};

export { EmploymentStatusInstance_Alumni };
