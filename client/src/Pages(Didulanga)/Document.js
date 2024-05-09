import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Components/Header';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import './Document.css';

const Document = () => {
  const [files, setFiles] = useState({
    TopicAssessmentForm: [],
    ProjectCharter: [],
    StatusDocument1: [],
    LogBook: [],
    ProposalDocument: [],
    StatusDocument2: [],
    FinalThesis: [],
  });
  const [groupIds, setGroupIds] = useState('');
  const groupIdInputRef = useRef(null);

  const handleDrop = (event, documentType) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles((prevFiles) => ({
      ...prevFiles,
      [documentType]: [...prevFiles[documentType], ...droppedFiles],
    }));
  };

  const handleFileInputChange = (event, documentType) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => ({
      ...prevFiles,
      [documentType]: [...prevFiles[documentType], ...selectedFiles],
    }));
  };

  const handleRemoveFile = (documentType, index) => {
    const updatedFiles = [...files[documentType]];
    updatedFiles.splice(index, 1);
    setFiles((prevFiles) => ({ ...prevFiles, [documentType]: updatedFiles }));
  };

 const handleSubmit = async () => {
  const documentData = {};

  Object.entries(files).forEach(([documentType, fileList]) => {
    documentData[`${documentType}Files`] = fileList.map((file) => ({
      originalname: file.name,
      // Add any other necessary file data properties
    }));
  });

  try {
    const response = await fetch('http://localhost:8000/api/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ groupId: groupIds, documentData }),
    });

    if (response.ok) {
      console.log('Document uploaded successfully');
      // Reset the state or show a success message
    } else {
      console.error('Failed to upload document');
      // Show an error message
    }
  } catch (error) {
    console.error('Error uploading document:', error);
    // Show an error message
  }
};

  return (
    <div>
      <Header />
      <NavigationBar />
      <div className="document-upload-container">
        <h2>Upload Documents</h2>
        <div className="group-id-input">
          <label htmlFor="groupIdInput"></label>
          <input
            type="text"
            id="groupIdInput"
            value={groupIds}
            onChange={(event) => setGroupIds(event.target.value)}
            placeholder="Enter group ID"
            ref={groupIdInputRef}
          />
        </div>
        {/* File Upload Fields */}
        {Object.keys(files).map((documentType) => (
          <div key={documentType} className="document-section">
            <h3>{documentType}</h3>
            <div
              className="drop-zone"
              onDrop={(event) => handleDrop(event, documentType)}
              onDragOver={(event) => event.preventDefault()}
              onClick={() =>
                documentType === 'TopicAssessmentForm'
                  ? groupIdInputRef.current.focus()
                  : null
              }
            >
              <p>Drag & drop files here</p>
              {files[documentType].map((file, index) => (
                <input
                  key={`${documentType}-${index}`}
                  type="file"
                  id={`${documentType}Input-${index}`}
                  multiple
                  onChange={(event) => handleFileInputChange(event, documentType)}
                  className="file-input"
                />
              ))}
            </div>
            <div className="file-list">
              {files[documentType].map((file, index) => (
                <div key={index} className="file-item">
                  <span className="file-name">{file.name}</span>
                  <button onClick={() => handleRemoveFile(documentType, index)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <button className="upload-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Document;