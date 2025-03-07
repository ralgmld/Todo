# 📝 1. Todo List App  

오늘 할 일을 **카테고리별로 정리하고, 체크 및 메모**하여 관리할 수 있는 애플리케이션입니다.  
할 일의 **진행률을 시각적으로 확인**할 수 있으며, **라이트/다크 모드** 기능도 지원합니다.  

---

## ✨ 주요 기능  

✅ **CRUD (할 일 추가, 수정, 삭제, 조회)**  
📌 **카테고리별 조회 및 진행률 표시**  
🌙 **라이트/다크 모드**  
📝 **메모 기능 (할 일별 추가 메모 가능)**  

---

## 🚀 2. 소스 빌드 및 실행 방법  

###  1) 환경 설정  
- **Frontend**: React.js  
- **Backend**: Spring Boot  
- **Database**: MySQL 8.0  
  ※ 위의 프로그램이 설치되어 있어야 합니다.  

###  2) 라이브러리 및 확장 프로그램  

#### 🖥️ 백엔드 (Spring Boot)  
- **Spring Boot**: REST API 서버 구현  
- **Spring Data JPA**: 객체와 관계형 데이터베이스 매핑  
- **Lombok**: Getter, Setter 자동 생성 및 코드 간소화  
- **MySQL Driver**: MySQL과 연동  
- **Swagger**: API 문서 자동화  

#### 🎨 프론트엔드 (React.js)  
- **Axios**: 백엔드 API와 데이터 통신  
- **React Router**: 페이지 이동 처리  
- **React Context API**: 전역 상태 관리 (다크/라이트 모드, Todo 목록 상태)  

###  3) 데이터베이스 설정  
1. MySQL 실행 후 `application.properties` 파일에서 **url, username, password를 환경에 맞게 수정**  
2. MySQL에서 아래 명령어를 실행하여 테이블과 기본 데이터를 생성  

   ```bash
   mysql -u root -p < Migrations/DDL.sql
   mysql -u root -p < Migrations/DML.sql

###  4) 백엔드 실행

코드 다운로드 : git clone https://github.com/ralgmld/Todo.git

해당 폴더로 이동 : cd Todo


의존성 설치 및 빌드 : ./gradlew build

Spring Boot 서버 실행 : ./gradlew bootRun

cf) spring boot bashboard에서 실행해도 무방
###  5) 프론트엔드 실행
cd frontend\todo-frontend

npm install

npm start

실행 후 브라우저에서 👉 http://localhost:3000/ 접속


## 🏗️ 3. 주력으로 사용한 컴포넌트 및 라이브러리
*컴포넌트*
- TodoList.js    # 할 일 목록 표시, API에서 데이터 불러옴

- TodoItem.js    # 개별 할 일 항목 표시 및 체크박스, 수정/삭제

- TodoForm.js    # 새로운 할 일 추가하는 입력 폼

*라이브러리*
- Spring Boot: REST API 서버 구현  
- Spring Data JPA: 객체와 관계형 데이터베이스 매핑  
- Lombok: Getter, Setter 자동 생성 및 코드 간소화  
- MySQL Driver: MySQL과 연동  
- Swagger: API 문서 자동화


## 📌 4. API 명세서
Swagger UI에서 API 문서를 확인할 수 있습니다.
👉 http://localhost:8080/swagger-ui/index.html

## 📌 5. 테스트 케이스

