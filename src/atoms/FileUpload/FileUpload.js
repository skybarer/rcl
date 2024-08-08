// src/components/FileUpload.js

import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Styled Components
const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
  border: 2px dashed #cccccc;
  border-radius: 10px;
  background-color: #fafafa;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  text-align: center;
  padding: 20px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const UploadInput = styled.input`
  display: none;
`;

const UploadMessage = styled.p`
  margin: 10px 0;
  color: #333;
  font-size: 16px;
`;

const DragAndDropMessage = styled.p`
  color: #666;
  font-size: 14px;
`;

const FileList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

const FileListItem = styled.li`
  margin: 5px 0;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #ff0000;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const FileUpload = ({ onFileSelect }) => {
  const [files, setFiles] = useState([]);

  const handleFileSelect = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
    onFileSelect(selectedFiles);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles(droppedFiles);
    onFileSelect(droppedFiles);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  return (
    <UploadContainer onDrop={handleDrop} onDragOver={handleDragOver}>
      <UploadInput
        type="file"
        id="fileUpload"
        multiple
        onChange={handleFileSelect}
      />
      <UploadMessage>
        Drag and drop files here, or{' '}
        <label
          htmlFor="fileUpload"
          style={{ color: '#007bff', cursor: 'pointer' }}
        >
          browse
        </label>
      </UploadMessage>
      <DragAndDropMessage>
        Supports drag-and-drop and browse options
      </DragAndDropMessage>

      <FileList>
        {files.map((file, index) => (
          <FileListItem key={index}>
            {file.name}
            <RemoveButton onClick={() => handleRemoveFile(index)}>
              Remove
            </RemoveButton>
          </FileListItem>
        ))}
      </FileList>
    </UploadContainer>
  );
};

FileUpload.propTypes = {
  onFileSelect: PropTypes.func.isRequired,
};

export default FileUpload;
