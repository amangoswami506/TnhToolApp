import React, { useState } from "react";

const Dashboard = () => {
  const [selectedFNameT, setSelectedFNameT] = useState("");
  const [selectedInstallT, setSelectedInstallT] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");
  const [showInstallT, setShowInstallT] = useState(false);
  const [showClass, setShowClass] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const fNameTOptions = [
    "Attachments",
    "Cab",
    "Driveline",
    "Electrical",
    "Engine",
    "Hydraulics",
    "Vehicle",
  ];

  const installTOptions = {
    Attachments: ["Bucket front", "Bucket rear"],
    // Add options for other selections of FName_T here
  };

  const classOptions = {
    "Bucket front": ["Bucket", "Hardware", "Machined part", "Make"],
    "Bucket rear": ["Bucket", "Hardware", "Machined part", "Make"],
    // Add options for other selections of Install_T here
  };

  const descriptionOptions = {
    Bucket: [
      "BUCKET ASSY, BACKHOE, 30 INCH",
      // Add more options here for Bucket selection
    ],
    Hardware: [
      "BUCKET, BACKHOE,ASSY,0.26 CUM",
      // Add more options here for Hardware selection
    ],
    // Add options for other selections of Class here
  };

  const handleFNameTChange = (e) => {
    const value = e.target.value;
    setSelectedFNameT(value);
    setSelectedInstallT("");
    setSelectedClass("");
    setSelectedDescription("");
    setShowInstallT(!!installTOptions[value]);
    setShowClass(false);
    setShowDescription(false);
  };

  const handleInstallTChange = (e) => {
    const value = e.target.value;
    setSelectedInstallT(value);
    setSelectedClass("");
    setSelectedDescription("");
    setShowClass(!!classOptions[value]);
    setShowDescription(false);
  };

  const handleClassChange = (e) => {
    const value = e.target.value;
    setSelectedClass(value);
    setSelectedDescription("");
    setShowDescription(!!descriptionOptions[value]);
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setSelectedDescription(value);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <label htmlFor="fNameT">F_NAME_T:</label>
        <select
          id="fNameT"
          onChange={handleFNameTChange}
          value={selectedFNameT}
        >
          <option value="">Select...</option>
          {fNameTOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {showInstallT && (
        <div>
          <label htmlFor="installT">Install_T:</label>
          <select
            id="installT"
            onChange={handleInstallTChange}
            value={selectedInstallT}
          >
            <option value="">Select...</option>
            {installTOptions[selectedFNameT].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}

      {showClass && (
        <div>
          <label htmlFor="class">Class:</label>
          <select id="class" onChange={handleClassChange} value={selectedClass}>
            <option value="">Select...</option>
            {classOptions[selectedInstallT].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}

      {showDescription && (
        <div>
          <label htmlFor="description">Description:</label>
          <select
            id="description"
            onChange={handleDescriptionChange}
            value={selectedDescription}
          >
            <option value="">Select...</option>
            {descriptionOptions[selectedClass].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
