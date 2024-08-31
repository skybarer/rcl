// src/components/WisewingEditor.js
import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Styled components
const EditorContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 8px;
  min-height: 150px;
  margin: 20px 0;
  outline: none;
  font-size: 16px;
  &:focus {
    border-color: #007bff;
  }
`;

const Toolbar = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: ${({ active }) => (active ? '#007bff' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const WisewingEditor = ({ initialContent }) => {
    const editorRef = useRef(null);

    // Function to handle formatting commands
    const handleCommand = (command, value = null) => {
        document.execCommand(command, false, value);
        editorRef.current.focus();
    };

    // Function to insert an image
    const insertImage = () => {
        const url = prompt('Enter the image URL');
        if (url) handleCommand('insertImage', url);
    };

    // Function to insert a video iframe
    const insertVideo = () => {
        const url = prompt('Enter the video URL (YouTube embed link recommended)');
        if (url) {
            const iframe = `<iframe width="560" height="315" src="${url}" frameborder="0" allowfullscreen></iframe>`;
            handleCommand('insertHTML', iframe);
        }
    };

    // Function to insert a link
    const insertLink = () => {
        const url = prompt('Enter the URL');
        if (url) handleCommand('createLink', url);
    };

    // Function to insert blockquote
    const insertBlockquote = () => {
        handleCommand('formatBlock', 'blockquote');
    };

    return (
        <div>
            <Toolbar>
                <Button onClick={() => handleCommand('bold')} title="Bold">
                    <b>B</b>
                </Button>
                <Button onClick={() => handleCommand('italic')} title="Italic">
                    <i>I</i>
                </Button>
                <Button onClick={() => handleCommand('underline')} title="Underline">
                    <u>U</u>
                </Button>
                <Button onClick={insertImage} title="Insert Image">
                    🖼️
                </Button>
                <Button onClick={insertVideo} title="Insert Video">
                    🎥
                </Button>
                <Button onClick={insertLink} title="Insert Link">
                    🔗
                </Button>
                <Button onClick={insertBlockquote} title="Blockquote">
                    ❝
                </Button>
            </Toolbar>
            <EditorContainer
                ref={editorRef}
                contentEditable
                suppressContentEditableWarning={true}
                onInput={() => { }}
                dangerouslySetInnerHTML={{ __html: initialContent }} // Set initial content directly
            />
        </div>
    );
};

WisewingEditor.propTypes = {
    initialContent: PropTypes.string,
};

WisewingEditor.defaultProps = {
    initialContent: 'Start typing here...',
};

export default WisewingEditor;
