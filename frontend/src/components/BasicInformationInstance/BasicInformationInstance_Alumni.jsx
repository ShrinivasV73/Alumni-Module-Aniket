// import React, { useState, useRef } from "react";
// import {
//     Container,
//     Row,
//     Col,
//     Form,
//     FormGroup,
//     FormLabel,
//     FormControl,
// } from "react-bootstrap";

// import {
//     FailureMessageEnoughWidth,
//     FailureMessageFullWidth,
// } from "../AlertMessages/FailureMessage.jsx";

// import { ButtonSecondaryEnoughWidth } from "../Buttons/ButtonSecondary.jsx";
// import { STUDENT_OBJECT } from "../../dummyData.js";

// import "./BasicInformationInstance.css";

// const BasicInformationInstance_Alumni = ({
//     fullName,
//     yearOfPassing,
//     alumniId,
//     enrollmentNo,
//     program,
//     department,
//     email,
//     phoneNo,
//     currentStatus,
//     gender,
//     address,
//     isAdding,
//     cancel,
//     confirmStatus,
//     elementIndex,
//     // isRenderedEditable = false,
// }) => {
//     //
//     const [displayValues, setDisplayValues] = useState({
//         fullName,
//         yearOfPassing,
//         alumniId,
//         enrollmentNo,
//         program,
//         department,
//         gender,
//         currentStatus,
//         email,
//         phoneNo,
//         address,
//     });

//     const currentStatusRef = useRef(currentStatus);
//     const emailRef = useRef(email);
//     const phoneNoRef = useRef(phoneNo);
//     const addressRef = useRef(address);

//     //
//     const [isEditing, setIsEditing] = useState(false);

//     //
//     const [isFormInvalid, setIsFormInvalid] = useState(false);

//     //
//     const handleInputChange = (event) => {
//         const { name, value } = event.target;

//         const updatedFormData = { ...formData, [name]: value };
//         setFormData(updatedFormData);
//     };

//     const handleConfirmClick = () => {
//         console.log(`handleConfirmClick Clicked`);
//         console.log(isEditing);
//         if (!isEditing) {
//             // First click: enter editing mode
//             setIsEditing(true);
//         } else {
//             const formData = {
//                 fullName: fullName,
//                 yearOfPassing: yearOfPassing,
//                 alumniId: alumniId,
//                 enrollmentNo: enrollmentNo,
//                 program: program,
//                 department: department,
//                 gender: gender,
//                 email: emailRef.current.value,
//                 currentStatus: currentStatusRef.current.value,
//                 phoneNo: phoneNoRef.current.value,
//                 address: addressRef.current.value,
//             };
//             const fieldsToValidate = {
//                 email: emailRef.current.value,
//                 currentStatus: currentStatusRef.current.value,
//                 phoneNo: phoneNoRef.current.value,
//                 address: addressRef.current.value,
//             };
//             // Validate form data on subsequent clicks
//             if (Object.values(fieldsToValidate).includes("")) {
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
//     };

//     const cancelEditing = () => {
//         setIsEditing(false); // Cancel editing new instance
//     };

//     return (
//         <Container className="employment-status-instance">
//             <Row>
//                 <Col>
//                     <FormGroup>
//                         <FormLabel>
//                             <strong>Full Name:</strong>
//                         </FormLabel>
//                         <p>{displayValues.fullName}</p>
//                     </FormGroup>
//                 </Col>
//                 <Col>
//                     <FormGroup>
//                         <FormLabel>
//                             <strong>Year Of Passing:</strong>
//                         </FormLabel>

//                         <p>{displayValues.yearOfPassing}</p>
//                     </FormGroup>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <FormGroup>
//                         <FormLabel>
//                             <strong>Alumni ID:</strong>
//                         </FormLabel>

//                         <p>{displayValues.alumniId}</p>
//                     </FormGroup>
//                 </Col>
//                 <Col>
//                     <FormGroup>
//                         <FormLabel>
//                             <strong>Enrollment No:</strong>
//                         </FormLabel>

//                         <p>{displayValues.enrollmentNo}</p>
//                     </FormGroup>
//                 </Col>
//             </Row>
//             <Row>
//                 <Col>
//                     <FormGroup>
//                         <FormLabel>
//                             <strong>Program:</strong>
//                         </FormLabel>

//                         <p>{displayValues.program}</p>
//                     </FormGroup>
//                 </Col>
//                 <Col>
//                     <FormGroup>
//                         <FormLabel>
//                             <strong>Department:</strong>
//                         </FormLabel>

//                         <p>{displayValues.department}</p>
//                     </FormGroup>
//                 </Col>
//             </Row>

//             <Row>
//                 <Col>
//                     <FormGroup>
//                         <FormLabel>
//                             <strong>Gender:</strong>
//                         </FormLabel>

//                         <p>{displayValues.gender}</p>
//                     </FormGroup>
//                 </Col>
//                 <Col>
//                     <FormGroup>
//                         <FormLabel>
//                             <strong>Current Status:</strong>
//                         </FormLabel>
//                         {isEditing ? (
//                             <FormControl
//                                 type="text"
//                                 name="industry"
//                                 defaultValue={displayValues.currentStatus}
//                                 ref={currentStatusRef}
//                             />
//                         ) : (
//                             <p>{displayValues.currentStatus}</p>
//                         )}
//                     </FormGroup>
//                 </Col>
//             </Row>

//             <Row>
//                 <Col>
//                     <FormGroup>
//                         <FormLabel>
//                             <strong>E-mail:</strong>
//                         </FormLabel>
//                         {isEditing ? (
//                             <FormControl
//                                 type="text"
//                                 name="companyLocation"
//                                 defaultValue={displayValues.email}
//                                 ref={emailRef}
//                             />
//                         ) : (
//                             <p>{displayValues.email}</p>
//                         )}
//                     </FormGroup>
//                 </Col>
//                 <Col>
//                     <FormGroup>
//                         <FormLabel>
//                             <strong>Phone No:</strong>
//                         </FormLabel>
//                         {isEditing ? (
//                             <FormControl
//                                 type="text"
//                                 name="industry"
//                                 defaultValue={displayValues.phoneNo}
//                                 ref={phoneNoRef}
//                             />
//                         ) : (
//                             <p>{displayValues.phoneNo}</p>
//                         )}
//                     </FormGroup>
//                 </Col>
//             </Row>

//             <Row>
//                 <Col>
//                     <FormGroup>
//                         <FormLabel>
//                             <strong>Address:</strong>
//                         </FormLabel>
//                         {isEditing ? (
//                             <FormControl
//                                 type="text"
//                                 name="companyLocation"
//                                 defaultValue={displayValues.address}
//                                 ref={addressRef}
//                             />
//                         ) : (
//                             <p>{displayValues.address}</p>
//                         )}
//                     </FormGroup>
//                 </Col>
//             </Row>

//             {/* */}
//             {isFormInvalid && (
//                 <Row>
//                     <Col>
//                         <FailureMessageEnoughWidth displayMessage="Fill Up All The Fields" />
//                     </Col>
//                 </Row>
//             )}

//             {/* */}
//             <Row>
//                 <Col>
//                     <ButtonSecondaryEnoughWidth
//                         text={
//                             isEditing
//                                 ? "Confirm and Save Changes"
//                                 : "Edit Employment Information"
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
//                             onButtonClick={isAdding ? cancel : cancelEditing}
//                         />
//                     ) : undefined}
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export { BasicInformationInstance_Alumni };

import React, { useState, useRef, useContext } from "react";
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    FormLabel,
    FormControl,
} from "react-bootstrap";
import { FailureMessageEnoughWidth } from "../AlertMessages/FailureMessage.jsx";
import { ButtonSecondaryEnoughWidth } from "../Buttons/ButtonSecondary.jsx";

const BasicInformationInstance_Alumni = ({
    fullName,
    yearOfPassing,
    alumniId,
    enrollmentNo,
    program,
    department,
    email,
    phoneNo,
    currentStatus,
    gender,
    address,
    isAdding,
    cancel,
    confirmStatus,
    elementIndex,
}) => {
    const [displayValues, setDisplayValues] = useState({
        fullName,
        yearOfPassing,
        alumniId,
        enrollmentNo,
        program,
        department,
        gender,
        currentStatus,
        email,
        phoneNo,
        address,
    });

    const currentStatusRef = useRef(currentStatus);
    const emailRef = useRef(email);
    const phoneNoRef = useRef(phoneNo);
    const addressRef = useRef(address);

    const [isEditing, setIsEditing] = useState(false);
    const [isFormInvalid, setIsFormInvalid] = useState(false);

    const handleConfirmClick = () => {
        if (!isEditing) {
            setIsEditing(true);
        } else {
            const formData = {
                fullName: displayValues.fullName,
                yearOfPassing: displayValues.yearOfPassing,
                alumniId: displayValues.alumniId,
                enrollmentNo: displayValues.enrollmentNo,
                program: displayValues.program,
                department: displayValues.department,
                gender: displayValues.gender,
                currentStatus: currentStatusRef.current.value,
                email: emailRef.current.value,
                phoneNo: phoneNoRef.current.value,
                address: addressRef.current.value,
            };

            const fieldsToValidate = {
                email: emailRef.current.value,
                currentStatus: currentStatusRef.current.value,
                phoneNo: phoneNoRef.current.value,
                address: addressRef.current.value,
            };

            if (Object.values(fieldsToValidate).includes("")) {
                setIsFormInvalid(true);
            } else {
                setIsFormInvalid(false);
                confirmStatus(formData, elementIndex);
                setIsEditing(false);
                setDisplayValues(formData);
            }
        }
    };

    const cancelEditing = () => {
        setIsEditing(false);
        cancel();
    };

    return (
        <Container className="employment-status-instance">
            <Row>
                <Col>
                    <FormGroup>
                        <FormLabel>
                            <strong>Full Name:</strong>
                        </FormLabel>
                        <p>{displayValues.fullName}</p>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <FormLabel>
                            <strong>Year Of Passing:</strong>
                        </FormLabel>
                        <p>{displayValues.yearOfPassing}</p>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <FormLabel>
                            <strong>Alumni ID:</strong>
                        </FormLabel>
                        <p>{displayValues.alumniId}</p>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <FormLabel>
                            <strong>Enrollment No:</strong>
                        </FormLabel>
                        <p>{displayValues.enrollmentNo}</p>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <FormLabel>
                            <strong>Program:</strong>
                        </FormLabel>
                        <p>{displayValues.program}</p>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <FormLabel>
                            <strong>Department:</strong>
                        </FormLabel>
                        <p>{displayValues.department}</p>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <FormLabel>
                            <strong>Gender:</strong>
                        </FormLabel>
                        <p>{displayValues.gender}</p>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <FormLabel>
                            <strong>Current Status:</strong>
                        </FormLabel>
                        {isEditing ? (
                            <FormControl
                                type="text"
                                defaultValue={displayValues.currentStatus}
                                ref={currentStatusRef}
                            />
                        ) : (
                            <p>{displayValues.currentStatus}</p>
                        )}
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <FormLabel>
                            <strong>E-mail:</strong>
                        </FormLabel>
                        {isEditing ? (
                            <FormControl
                                type="text"
                                defaultValue={displayValues.email}
                                ref={emailRef}
                            />
                        ) : (
                            <p>{displayValues.email}</p>
                        )}
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <FormLabel>
                            <strong>Phone No:</strong>
                        </FormLabel>
                        {isEditing ? (
                            <FormControl
                                type="text"
                                defaultValue={displayValues.phoneNo}
                                ref={phoneNoRef}
                            />
                        ) : (
                            <p>{displayValues.phoneNo}</p>
                        )}
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <FormLabel>
                            <strong>Address:</strong>
                        </FormLabel>
                        {isEditing ? (
                            <FormControl
                                type="text"
                                defaultValue={displayValues.address}
                                ref={addressRef}
                            />
                        ) : (
                            <p>{displayValues.address}</p>
                        )}
                    </FormGroup>
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
                                : "Edit Basic Information"
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
                            onButtonClick={cancelEditing}
                        />
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export { BasicInformationInstance_Alumni };
