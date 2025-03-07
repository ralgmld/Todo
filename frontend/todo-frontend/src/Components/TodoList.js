import React, { useEffect, useState } from 'react'; 
import { getTodos, createTodo, updateTodo, deleteTodo } from '../Services/Api';
import TodoForm from './TodoForm'; 
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

const TodoList = ({ darkMode, setDarkMode }) => {

  // 상태 관리
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [currentDate, setCurrentDate] = useState('');
 
  // 조회
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const fetchedTodos = await getTodos();
        setTodos(fetchedTodos);
        setFilteredTodos(fetchedTodos);
      } catch (error) {
        console.error('Error fetching todos', error);
      }
    };
    fetchTodos();
  }, []);

  // 카테고리별 필터링
  useEffect(() => {
    if (selectedCategory === '전체') { 
      setFilteredTodos(todos); 
    } else { 
      setFilteredTodos(todos.filter((todo) => todo.category === selectedCategory)); 
    }
  }, [todos, selectedCategory]);
  
  // 날짜(yyyy-MM-dd) 가져오기
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; 
    setCurrentDate(formattedDate);
  }, []);
  
  // Todo 추가 기능
  const addTodoItem = async (newTodo, category) => {
    if (newTodo.trim() === '') return;
    try {
      const todo = { name: newTodo, completed: false, category }; 
      const createdTodoItem = await createTodo(todo);
      setTodos([...todos, createdTodoItem]);
      setFilteredTodos([...filteredTodos, createdTodoItem]);
    } catch (error) { 
      console.error('Error adding todo', error); 
    }
  };

  // Todo 수정 기능
  const updateTodoItem = async (id, updatedTodo) => {
    try {
      const result = await updateTodo(id, updatedTodo);
      setTodos(todos.map((todo) => (todo.id === result.id ? result : todo)));
      setFilteredTodos(filteredTodos.map((todo) => (todo.id === result.id ? result : todo)));
    } catch (error) { 
      console.error('Error updating todo', error); 
    }
  };

  // Todo 삭제 기능
  const deleteTodoItem = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
      setFilteredTodos(filteredTodos.filter((todo) => todo.id !== id));
    } catch (error) { 
      console.error('Error deleting todo', error); 
    }
  };

  // 카테고리별 진행률 계산
  const calculateCategoryProgress = (category) => {
    const categoryTodos = todos.filter(todo => todo.category === category);
    const completedCategoryTodos = categoryTodos.filter(todo => todo.completed).length;
    return categoryTodos.length > 0 
      ? (completedCategoryTodos / categoryTodos.length) * 100 
      : 0;
  };

  // 전체 진행률 계산
  const calculateOverallProgress = () => {
    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => todo.completed).length;
    return totalTodos > 0 ? (completedTodos / totalTodos) * 100 : 0;
  };

  // 카테고리 예시
  const categories = ['업무', '회의', '약속']; 
  
  // 진행률에 따른 색상 반환
  const getProgressClass = (progress) => {
    if (progress === 100) return 'High'; 
    if (progress >= 50) return 'Medium'; 
    return 'Low'; 
  };

  // 다크 모드에 따라 body 클래스 업데이트
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);
  
  return (
    <div className="container">
      <div className="header">
        <h1 className="title">📜 Todo List 📜<span className="dateText">{currentDate}</span></h1>
        <button className="darkModeButton" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <div className="contentWrapper">
        <div className="todoSection">
          <TodoForm addTodo={addTodoItem} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          <ul className="todoListContainer">
            {filteredTodos.length > 0 ? (
              filteredTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} updateTodoItem={updateTodoItem} deleteTodoItem={deleteTodoItem} />
              ))
            ) : (
              <p className="noTodos">No todos available</p>
            )}
          </ul>
        </div>

        <div className="memoSection">
          <h3>Memo</h3>
          <textarea className="memoTextArea" placeholder="Write your thoughts here..." />
        </div>
      </div>

      <div className="progressSection">
        {selectedCategory === '전체' && (
          <div className="categoryProgressWrapper">
            <h3>전체 진행률</h3>
            <div className="progressBarWrapper">
              <div 
                className={`progressBar ${getProgressClass(calculateOverallProgress())}`} 
                style={{ width: `${calculateOverallProgress()}%` }}
              />
            </div>
            <p>{Math.round(calculateOverallProgress())}% 완료</p>
          </div>
        )}

        {selectedCategory !== '전체' && (
          <div className="categoryProgressWrapper">
            <h3>{selectedCategory} 진행률</h3>
            <div className="progressBarWrapper">
              <div 
                className={`progressBar ${getProgressClass(calculateCategoryProgress(selectedCategory))}`} 
                style={{ width: `${calculateCategoryProgress(selectedCategory)}%` }}
              />
            </div>
            <p>{Math.round(calculateCategoryProgress(selectedCategory))}% 완료</p>
          </div>
        )}

        {selectedCategory === '전체' && categories.map((category) => (
          <div key={category} className="categoryProgressWrapper">
            <h3>{category} 진행률</h3>
            <div className="progressBarWrapper">
              <div 
                className={`progressBar ${getProgressClass(calculateCategoryProgress(category))}`} 
                style={{ width: `${calculateCategoryProgress(category)}%` }}
              />
            </div>
            <p>{Math.round(calculateCategoryProgress(category))}% 완료</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
