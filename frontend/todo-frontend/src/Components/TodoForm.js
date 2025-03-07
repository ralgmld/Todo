import React, { useState } from 'react';
import { FormContainer, Input, Select, Button } from '../styles/TodoFormStyle';

const TodoForm = ({ addTodo, selectedCategory, setSelectedCategory }) => {
  const [newTodo, setNewTodo] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo, selectedCategory);
    setNewTodo('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="New Todo"
      />
      <Select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="전체">전체</option>
        <option value="업무">업무</option>
        <option value="회의">회의</option>
        <option value="약속">약속</option>
      </Select>
      <Button type="submit">Add</Button>
    </FormContainer>
  );
};

export default TodoForm;
