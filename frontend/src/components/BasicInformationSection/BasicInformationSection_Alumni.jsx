// // import ButtonSecondary from "../Buttons/"
// import React, { useState, useEffect } from "react";

// import { H1, H2, H3, H4, H5, H6 } from "../Typography/Typography.jsx";
// import { BasicInformationInstance_Alumni } from "../BasicInformationInstance/BasicInformationInstance_Alumni.jsx";
// import {
//     STUDENT_OBJECT,
//     displayBasicInformation,
//     updateBasicInformation,
// } from "../../dummyData_New.js";

// const BasicInformationSection_Alumni = () => {
//     // employmentInstances, setEmploymentStatusInstances
//     // basicInfoInstances, setBasicInfoInstance
//     const [basicInfoInstances, setBasicInfoInstance] = useState(
//         displayBasicInformation()
//     );

//     const confirmStatus = (formData, elementIndex) => {
//         let updatedInstances = basicInfoInstances;
//         if (isAdding) {
//             updatedInstances = [...basicInfoInstances, formData];
//         } else {
//             updatedInstances[elementIndex] = formData;
//         }

//         setBasicInfoInstance(updatedInstances);
//         updateBasicInformation(updatedInstances);

//         // Reset the adding state after confirmation
//         setIsAdding(false);
//     };

//     const [isAdding, setIsAdding] = useState(false);

//     // const handleAddEmploymentStatus = () => {
//     //     setIsAdding(true);
//     // };

//     const cancelAdding = () => {
//         setIsAdding(false); // Cancel adding new instance
//     };
//     return (
//         <section id="basic-information">
//             <H4 text="Basic Information" classes={"text-align-left"} />
//             <div className="instance-container">
//                 {basicInfoInstances.map((basicInfo, index) => (
//                     <BasicInformationInstance_Alumni
//                         key={index}
//                         {...basicInfo}
//                         confirmStatus={confirmStatus}
//                         elementIndex={basicInfoInstances.length}
//                     />
//                 ))}
//             </div>
//         </section>
//     );
// };

// export { BasicInformationSection_Alumni };

import React, { useContext } from "react";
import { H4 } from "../Typography/Typography.jsx";
import { BasicInformationInstance_Alumni } from "../BasicInformationInstance/BasicInformationInstance_Alumni.jsx";
import { AlumniContext } from "../../store/AlumniContext.jsx";

const BasicInformationSection_Alumni = () => {
    const {
        basicInfoInstances,
        confirmBasicInformation,
        isAddingBasicInfo,
        setIsAddingBasicInfo,
        cancelAddingBasicInfo,
    } = useContext(AlumniContext);

    return (
        <section id="basic-information">
            <H4 text="Basic Information" classes={"text-align-left"} />
            <div className="instance-container">
                {basicInfoInstances.map((basicInfo, index) => (
                    <BasicInformationInstance_Alumni
                        key={index}
                        {...basicInfo}
                        confirmStatus={confirmBasicInformation}
                        elementIndex={index}
                        isAdding={isAddingBasicInfo}
                        cancel={cancelAddingBasicInfo}
                    />
                ))}
            </div>
        </section>
    );
};

export { BasicInformationSection_Alumni };
