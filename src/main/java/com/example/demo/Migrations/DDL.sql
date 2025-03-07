CREATE DATABASE TodoList;

USE TodoList;

CREATE TABLE todos (
  id INT AUTO_INCREMENT PRIMARY KEY,    -- 고유 ID
  name VARCHAR(255) NOT NULL,           -- 할 일 이름
  completed BOOLEAN DEFAULT FALSE,      -- 완료 여부 (기본값: false)
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- 생성일
  category VARCHAR(50),                 -- 카테고리 (예: 업무, 회의, 약속 등)
  
);
