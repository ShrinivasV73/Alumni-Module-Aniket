// import React, { useState, useEffect, useRef } from "react";
// import {
//     Container,
//     Row,
//     Col,
//     Form,
//     FormControl,
//     FormSelect,
// } from "react-bootstrap";
// import { ButtonSecondaryEnoughWidth } from "../Buttons/ButtonSecondary.jsx";

// import {
//     FailureMessageEnoughWidth,
//     FailureMessageFullWidth,
// } from "../AlertMessages/FailureMessage.jsx";

// import "./EducationalStatusInstance.css";

// import {
//     STUDENT_OBJECT,
//     updateEducationInformation,
//     displayEducationInformation,
// } from "../../dummyData_New.js";

// const currentDate = new Date();
// let currentYear = currentDate.getFullYear();

// const yearsArray = [...Array(currentYear - 1960 + 7).keys()].map(
//     (year) => year + 1960
// );

// const EducationalStatusInstance_Alumni = ({
//     admissionYear,
//     passingYear,
//     degreeProgram,
//     departmentOrSpecialization,
//     collegeOrInstituteName,
//     univerversityName,
//     location,
//     confirmStatus,
//     elementIndex,
//     cancel,
//     isRenderedEditable = false,
// }) => {
//     // ---------------
//     // DEFINING STATES

//     const [displayValues, setDisplayValues] = useState({
//         admissionYear,
//         passingYear,
//         degreeProgram,
//         departmentOrSpecialization,
//         collegeOrInstituteName,
//         univerversityName,
//         location,
//     });

//     // Use refs to track the input elements
//     const admissionYearRef = useRef(admissionYear);
//     const passingYearRef = useRef(passingYear);
//     const degreeProgramRef = useRef(degreeProgram);
//     const departmentOrSpecializationRef = useRef(departmentOrSpecialization);
//     const collegeOrInstituteNameRef = useRef(collegeOrInstituteName);
//     const univerversityNameRef = useRef(univerversityName);
//     const locationRef = useRef(location);

//     //
//     const [isEditing, setIsEditing] = useState(false);

//     //
//     const [isFormInvalid, setIsFormInvalid] = useState(false);

//     //
//     useEffect(() => {
//         if (isRenderedEditable) {
//             setIsEditing(true);
//         }
//     }, [isRenderedEditable]);

//     //
//     const handleConfirmClick = () => {
//         if (!isEditing) {
//             // First click: enter editing mode
//             setIsEditing(true);
//         } else {
//             // Extracting values from refs on button click
//             const formData = {
//                 admissionYear: admissionYearRef.current.value,
//                 passingYear: passingYearRef.current.value,
//                 degreeProgram: degreeProgramRef.current.value,
//                 departmentOrSpecialization:
//                     departmentOrSpecializationRef.current.value,
//                 collegeOrInstituteName: collegeOrInstituteNameRef.current.value,
//                 univerversityName: univerversityNameRef.current.value,
//                 location: locationRef.current.value,
//             };
//             // Validate form data on subsequent clicks
//             if (Object.values(formData).includes("")) {
//                 setIsFormInvalid(true);
//             } else {
//                 setIsFormInvalid(false);
//                 confirmStatus(formData, elementIndex);
//                 // Exit editing mode only if form is valid
//                 setIsEditing(false);
//                 // Update display values when confirming changes
//                 setDisplayValues(formData);
//             }
//         }
//         console.log(displayValues);
//     };

//     return (
//         <Container className="employment-status-instance">
//             <Row>
//                 <Col>
//                     <Form.Group>
//                         <Form.Label>
//                             <strong>Admission Year:</strong>
//                         </Form.Label>
//                         {isEditing ? (
//                             <FormSelect
//                                 defaultValue={displayValues.admissionYear}
//                                 ref={admissionYearRef}
//                             >
//                                 {yearsArray.map((year) => (
//                                     <option key={year} value={year}>
//                                         {year}
//                                     </option>
//                                 ))}
//                             </FormSelect>
//                         ) : (
//                             <p>{displayValues.admissionYear}</p>
//                         )}
//                     </Form.Group>
//                 </Col>
//                 <Col>
//                     <Form.Group>
//                         <Form.Label>
//                             <strong>Passing Year:</strong>
//                         </Form.Label>
//                         {isEditing ? (
//                             <FormSelect
//                                 defaultValue={displayValues.passingYear}
//                                 ref={passingYearRef}
//                             >
//                                 {yearsArray.map((year) => (
//                                     <option key={year} value={year}>
//                                         {year}
//                                     </option>
//                                 ))}
//                             </FormSelect>
//                         ) : (
//                             <p>{displayValues.passingYear}</p>
//                         )}
//                     </Form.Group>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <Form.Group>
//                         <Form.Label>
//                             <strong>Degree Program:</strong>
//                         </Form.Label>
//                         {isEditing ? (
//                             <FormControl
//                                 type="text"
//                                 name="degreeProgram"
//                                 defaultValue={displayValues.degreeProgram}
//                                 ref={degreeProgramRef}
//                             />
//                         ) : (
//                             <p>{displayValues.degreeProgram}</p>
//                         )}
//                     </Form.Group>
//                 </Col>
//                 <Col>
//                     <Form.Group>
//                         <Form.Label>
//                             <strong>Department Or Specialization:</strong>
//                         </Form.Label>
//                         {isEditing ? (
//                             <FormControl
//                                 type="text"
//                                 name="departmentOrSpecialization"
//                                 defaultValue={
//                                     displayValues.departmentOrSpecialization
//                                 }
//                                 ref={departmentOrSpecializationRef}
//                             />
//                         ) : (
//                             <p>{displayValues.departmentOrSpecialization}</p>
//                         )}
//                     </Form.Group>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <Form.Group>
//                         <Form.Label>
//                             <strong>College Or Institute Name:</strong>
//                         </Form.Label>
//                         {isEditing ? (
//                             <FormControl
//                                 type="text"
//                                 name="collegeOrInstituteName"
//                                 defaultValue={
//                                     displayValues.collegeOrInstituteName
//                                 }
//                                 ref={collegeOrInstituteNameRef}
//                             />
//                         ) : (
//                             <p>{displayValues.collegeOrInstituteName}</p>
//                         )}
//                     </Form.Group>
//                 </Col>
//                 <Col>
//                     <Form.Group>
//                         <Form.Label>
//                             <strong>Univerversity Name:</strong>
//                         </Form.Label>
//                         {isEditing ? (
//                             <FormControl
//                                 type="text"
//                                 name="univerversityName"
//                                 defaultValue={displayValues.univerversityName}
//                                 ref={univerversityNameRef}
//                             />
//                         ) : (
//                             <p>{displayValues.univerversityName}</p>
//                         )}
//                     </Form.Group>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <Form.Group>
//                         <Form.Label>
//                             <strong>Location:</strong>
//                         </Form.Label>
//                         {isEditing ? (
//                             <FormControl
//                                 type="text"
//                                 name="location"
//                                 defaultValue={displayValues.location}
//                                 ref={locationRef}
//                             />
//                         ) : (
//                             <p>{displayValues.location}</p>
//                         )}
//                     </Form.Group>
//                 </Col>
//             </Row>
//             {isFormInvalid && (
//                 <Row>
//                     <Col>
//                         <FailureMessageEnoughWidth displayMessage="Fill Up All The Fields" />
//                     </Col>
//                 </Row>
//             )}

//             {/* <Row className="d-flex p-2 bd-highlight"> */}
//             <Row>
//                 <Col>
//                     <ButtonSecondaryEnoughWidth
//                         text={
//                             isEditing
//                                 ? "Confirm and Save Changes"
//                                 : "Edit Educational Information"
//                         }
//                         variant={"secondary"}
//                         onButtonClick={(event) => handleConfirmClick(event)}
//                     />
//                 </Col>
//                 <Col>
//                     {isEditing ? (
//                         <ButtonSecondaryEnoughWidth
//                             text="Cancel"
//                             variant={"secondary"}
//                             onButtonClick={cancel}
//                         />
//                     ) : undefined}
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export { EducationalStatusInstance_Alumni };

import React, { useState, useEffect, useRef } from "react";
import {
    Container,
    Row,
    Col,
    Form,
    FormControl,
    FormSelect,
} from "react-bootstrap";
import { ButtonSecondaryEnoughWidth } from "../Buttons/ButtonSecondary.jsx";
import { FailureMessageEnoughWidth } from "../AlertMessages/FailureMessage.jsx";
import "./EducationalStatusInstance.css";

const currentDate = new Date();
let currentYear = currentDate.getFullYear();
const yearsArray = [...Array(currentYear - 1960 + 7).keys()].map(
    (year) => year + 1960
);

const EducationalStatusInstance_Alumni = ({
    admissionYear,
    passingYear,
    degreeProgram,
    departmentOrSpecialization,
    collegeOrInstituteName,
    univerversityName,
    location,
    confirmStatus,
    elementIndex,
    cancel,
    isRenderedEditable = false,
}) => {
    // Defining states
    const [displayValues, setDisplayValues] = useState({
        admissionYear,
        passingYear,
        degreeProgram,
        departmentOrSpecialization,
        collegeOrInstituteName,
        univerversityName,
        location,
    });

    // Use refs to track the input elements
    const admissionYearRef = useRef(admissionYear);
    const passingYearRef = useRef(passingYear);
    const degreeProgramRef = useRef(degreeProgram);
    const departmentOrSpecializationRef = useRef(departmentOrSpecialization);
    const collegeOrInstituteNameRef = useRef(collegeOrInstituteName);
    const univerversityNameRef = useRef(univerversityName);
    const locationRef = useRef(location);

    const [isEditing, setIsEditing] = useState(false);
    const [isFormInvalid, setIsFormInvalid] = useState(false);

    useEffect(() => {
        if (isRenderedEditable) {
            setIsEditing(true);
        }
    }, [isRenderedEditable]);

    const handleConfirmClick = () => {
        if (!isEditing) {
            setIsEditing(true);
        } else {
            const formData = {
                admissionYear: admissionYearRef.current.value,
                passingYear: passingYearRef.current.value,
                degreeProgram: degreeProgramRef.current.value,
                departmentOrSpecialization:
                    departmentOrSpecializationRef.current.value,
                collegeOrInstituteName: collegeOrInstituteNameRef.current.value,
                univerversityName: univerversityNameRef.current.value,
                location: locationRef.current.value,
            };
            if (Object.values(formData).includes("")) {
                setIsFormInvalid(true);
            } else {
                setIsFormInvalid(false);
                confirmStatus(formData, elementIndex);
                setIsEditing(false);
                setDisplayValues(formData);
            }
        }
    };

    return (
        <Container className="employment-status-instance">
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>
                            <strong>Admission Year:</strong>
                        </Form.Label>
                        {isEditing ? (
                            <FormSelect
                                defaultValue={displayValues.admissionYear}
                                ref={admissionYearRef}
                            >
                                {yearsArray.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </FormSelect>
                        ) : (
                            <p>{displayValues.admissionYear}</p>
                        )}
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>
                            <strong>Passing Year:</strong>
                        </Form.Label>
                        {isEditing ? (
                            <FormSelect
                                defaultValue={displayValues.passingYear}
                                ref={passingYearRef}
                            >
                                {yearsArray.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </FormSelect>
                        ) : (
                            <p>{displayValues.passingYear}</p>
                        )}
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>
                            <strong>Degree Program:</strong>
                        </Form.Label>
                        {isEditing ? (
                            <FormControl
                                type="text"
                                name="degreeProgram"
                                defaultValue={displayValues.degreeProgram}
                                ref={degreeProgramRef}
                            />
                        ) : (
                            <p>{displayValues.degreeProgram}</p>
                        )}
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>
                            <strong>Department Or Specialization:</strong>
                        </Form.Label>
                        {isEditing ? (
                            <FormControl
                                type="text"
                                name="departmentOrSpecialization"
                                defaultValue={
                                    displayValues.departmentOrSpecialization
                                }
                                ref={departmentOrSpecializationRef}
                            />
                        ) : (
                            <p>{displayValues.departmentOrSpecialization}</p>
                        )}
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>
                            <strong>College Or Institute Name:</strong>
                        </Form.Label>
                        {isEditing ? (
                            <FormControl
                                type="text"
                                name="collegeOrInstituteName"
                                defaultValue={
                                    displayValues.collegeOrInstituteName
                                }
                                ref={collegeOrInstituteNameRef}
                            />
                        ) : (
                            <p>{displayValues.collegeOrInstituteName}</p>
                        )}
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>
                            <strong>Univerversity Name:</strong>
                        </Form.Label>
                        {isEditing ? (
                            <FormControl
                                type="text"
                                name="univerversityName"
                                defaultValue={displayValues.univerversityName}
                                ref={univerversityNameRef}
                            />
                        ) : (
                            <p>{displayValues.univerversityName}</p>
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
                                name="location"
                                defaultValue={displayValues.location}
                                ref={locationRef}
                            />
                        ) : (
                            <p>{displayValues.location}</p>
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
                                : "Edit Educational Information"
                        }
                        variant={"secondary"}
                        onButtonClick={handleConfirmClick}
                    />
                </Col>
                <Col>
                    {isEditing && (
                        <ButtonSecondaryEnoughWidth
                            text="Cancel"
                            variant={"secondary"}
                            onButtonClick={cancel}
                        />
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export { EducationalStatusInstance_Alumni };
