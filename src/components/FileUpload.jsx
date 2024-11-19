import React from "react";

const FileUpload = ({ onFileUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <input
      type="file"
      accept=".pdf,.xlsx,.jpg,.png"
      onChange={handleFileChange}
    />
  );
};

export default FileUpload;
