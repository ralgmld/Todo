import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: ${(props) => props.theme.todoBg};
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

export const TodoText = styled.span`
  text-decoration: ${(props) => (props.$completed ? 'line-through' : 'none')};
  flex-grow: 1;
`;

export const EditInput = styled.input`
  flex-grow: 1;
  padding: 5px;
  margin-right: 10px;
`;

export const CategoryTag = styled.span`
  background-color: #B89E9E;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  background-color: #8c6954;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 5px;

  &:hover {
    background-color: ${(props) => (props.children === 'Save' || props.children === 'Edit' ? '#45a049' : 'darkred')};
  }
`;
