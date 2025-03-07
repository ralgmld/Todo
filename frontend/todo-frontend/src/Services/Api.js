import axios from "axios";

const API_URL = "http://localhost:8080/api/todos";

// 할 일 추가 (C)
export const createTodo = async (todo) => {
  try {
    const response = await axios.post(API_URL, todo);
    return response.data;
  } catch (error) {
    console.error("Error adding todo", error);
    return [];
  }
};

// 할 일 조회 (R)
export const getTodos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching todos", error);
    return [];
  }
};

// 할 일 수정 (U)
export const updateTodo = async (id, updatedTodo) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedTodo);
    return response.data;
  } catch (error) {
    console.error("Error updating todo", error);
    return [];
  }
};

// 할 일 삭제 (D)
export const deleteTodo = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting todo", error);
    return [];
  }
};
