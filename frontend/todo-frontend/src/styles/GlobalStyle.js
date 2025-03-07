import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: background-color 0.3s, color 0.3s;
  }
`;

//라이트 모드 테마 설정
export const lightTheme = {
  background: '#ffffff',
  text: '#000000',
  todoBg: '#f9f9f9',
  buttonBg: '#4CAF50',
  buttonHover: '#45a049',
};

// 다크 모드 테마 설정
export const darkTheme = {
  background: "#EAEAE8",        
  todoBg: "#EBEBE9",       
  buttonBg: "#6B4F2F",     
  buttonHover: "#8B6F4F",  
  inputBg: "#2B241C",      
  borderColor: "#8B6F4F"
};

