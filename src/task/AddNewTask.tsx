import React from 'react';
import Container from '../components/Container';
import TextComponent from '../components/TextComponent';

const AddNewTask = () => {
  return (
    <Container back title="Add New Task">
      <TextComponent text="Add New Task" />
    </Container>
  );
};

export default AddNewTask;
