import React, { useState } from 'react';
import { Item, Checkbox, TodoText, EditInput, CategoryTag, Button } from '../styles/TodoItemStyles';

const TodoItem = ({ todo, updateTodoItem, deleteTodoItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(todo.name);

  const handleCheckTodo = () => {
    updateTodoItem(todo.id, { ...todo, completed: !todo.completed });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (editedName.trim() === '') return;
    updateTodoItem(todo.id, { ...todo, name: editedName });
    setIsEditing(false); 
  };

  const handleCancelClick = () => {
    setEditedName(todo.name);
    setIsEditing(false);
  };

  return (
    <Item>
      <Checkbox 
        type="checkbox" 
        checked={todo.completed} 
        onChange={handleCheckTodo} 
      />

      {isEditing ? (
        <EditInput 
          type="text" 
          value={editedName} 
          onChange={(e) => setEditedName(e.target.value)} 
        />
      ) : (
        <TodoText $completed={todo.completed}>{todo.name}</TodoText>
      )}

      <CategoryTag>{todo.category}</CategoryTag>

      {isEditing ? (
        <>
          <Button onClick={handleSaveClick}>Save</Button>
          <Button onClick={handleCancelClick}>Cancel</Button>
        </>
      ) : (
        <>
          <Button onClick={handleEditClick}>Edit</Button>
          <Button onClick={() => deleteTodoItem(todo.id)}>Delete</Button>
        </>
      )}
    </Item>
  );
};

export default TodoItem;
