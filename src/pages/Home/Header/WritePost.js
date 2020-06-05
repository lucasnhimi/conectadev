import React from 'react';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';

function WritePost() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/post/new');
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      Novo Post
    </Button>
  );
}

export default WritePost;
