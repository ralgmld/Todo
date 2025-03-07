import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme, darkTheme } from './styles/GlobalStyle';
import TodoList from './Components/TodoList';

const App = () => {
  const [darkMode, setDarkMode] = useState(false); //기본 값 : 라이트 모드

  // GlobalStyle 적용 , 다크 모드`라이트 모드 스타일 적용
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <TodoList darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
};
export default App;
