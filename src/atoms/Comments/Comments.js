import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Styled container for the comments section
const CommentsContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

// Styled list for comments
const CommentList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

// Styled individual comment
const CommentItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;

  &:last-child {
    border-bottom: none;
  }
`;

// Styled form for adding a new comment
const CommentForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

// Styled input field for the comment author
const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

// Styled textarea for the comment content
const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
`;

// Styled button for submitting a new comment
const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Comments = ({ initialComments }) => {
  const [comments, setComments] = useState(initialComments);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleAddComment = (e) => {
    e.preventDefault();
    if (author.trim() === '' || content.trim() === '') {
      return;
    }

    const newComment = {
      id: comments.length + 1,
      author,
      content,
    };

    setComments([...comments, newComment]);
    setAuthor('');
    setContent('');
  };

  return (
    <CommentsContainer>
      <h2>Comments</h2>
      <CommentList>
        {comments.map((comment) => (
          <CommentItem key={comment.id}>
            <strong>{comment.author}</strong>
            <p>{comment.content}</p>
          </CommentItem>
        ))}
      </CommentList>
      <CommentForm onSubmit={handleAddComment}>
        <Input
          type="text"
          placeholder="Your name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <TextArea
          rows="4"
          placeholder="Your comment"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <Button type="submit">Add Comment</Button>
      </CommentForm>
    </CommentsContainer>
  );
};

Comments.propTypes = {
  initialComments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

Comments.defaultProps = {
  initialComments: [],
};

export default Comments;
