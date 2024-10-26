// import { useState } from "react";

// import { H1, H2, H3, H4, H5, H6 } from "../Typography/Typography.jsx";
// import { EducationalStatusInstance_Alumni } from "../EducationalStatusInstance/EducationalStatusInstance_Alumni.jsx";

// import { ButtonDarkFullWidth } from "../Buttons/ButtonDark.jsx";

// import "./EducationalStatusSection.css";
// import {
//     STUDENT_OBJECT,
//     updateEducationInformation,
//     displayEducationInformation,
// } from "../../dummyData_New.js";

// const EducationalStatusSection_Alumni = () => {
//     const [educationalInstances, setEducationalInstances] = useState(
//         displayEducationInformation()
//     );

//     const confirmStatus = (formData, elementIndex) => {
//         let updatedInstances = educationalInstances;
//         if (isAdding) {
//             updatedInstances = [...educationalInstances, formData];
//         } else {
//             updatedInstances[elementIndex] = formData;
//         }

//         setEducationalInstances(updatedInstances);
//         updateEducationInformation(updatedInstances);

//         // Reset the adding state after confirmation
//         setIsAdding(false);
//     };

//     const [isAdding, setIsAdding] = useState(false);

//     const handleAddEmploymentStatus = () => {
//         setIsAdding(true);
//     };

//     const cancel = () => {
//         setIsAdding(false); // Cancel adding new instance
//     };

//     return (
//         <section id="educational-status-section">
//             <H4 text="Educational Status" classes={"text-align-left"} />
//             <ButtonDarkFullWidth
//                 text={"Add New Educational Qualification"}
//                 variant={"outline-dark"}
//                 onButtonClick={handleAddEmploymentStatus}
//             />
//             <div className="instance-container">
//                 {educationalInstances.map((edu, index) => (
//                     <EducationalStatusInstance_Alumni
//                         key={index}
//                         {...edu}
//                         elementIndex={index}
//                         confirmStatus={confirmStatus}
//                     />
//                 ))}
//                 {isAdding && (
//                     <EducationalStatusInstance_Alumni
//                         confirmStatus={confirmStatus}
//                         cancel={cancel}
//                         elementIndex={educationalInstances.length}
//                         isRenderedEditable={true}
//                     />
//                 )}
//             </div>
//         </section>
//     );
// };

// export { EducationalStatusSection_Alumni };

import { useContext } from "react";
import { H4 } from "../Typography/Typography.jsx";
import { EducationalStatusInstance_Alumni } from "../EducationalStatusInstance/EducationalStatusInstance_Alumni.jsx";
import { ButtonDarkFullWidth } from "../Buttons/ButtonDark.jsx";
import "./EducationalStatusSection.css";
import { AlumniContext } from "../../store/AlumniContext.jsx";

const EducationalStatusSection_Alumni = () => {
    const {
        educationalInstances,
        isAddingEducational,
        confirmEducationalStatus,
        handleAddEducationalStatus,
        cancelAddingEducational,
    } = useContext(AlumniContext); // Consume the context

    return (
        <section id="educational-status-section">
            <H4 text="Educational Status" classes={"text-align-left"} />
            <ButtonDarkFullWidth
                text={"Add New Educational Qualification"}
                variant={"outline-dark"}
                onButtonClick={handleAddEducationalStatus}
            />
            <div className="instance-container">
                {educationalInstances.map((edu, index) => (
                    <EducationalStatusInstance_Alumni
                        key={index}
                        {...edu}
                        elementIndex={index}
                        confirmStatus={confirmEducationalStatus}
                    />
                ))}
                {isAddingEducational && (
                    <EducationalStatusInstance_Alumni
                        confirmStatus={confirmEducationalStatus}
                        cancel={cancelAddingEducational}
                        elementIndex={educationalInstances.length}
                        isRenderedEditable={true}
                    />
                )}
            </div>
        </section>
    );
};

export { EducationalStatusSection_Alumni };
