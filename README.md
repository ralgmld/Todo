# Todo
1. 자신이 개발한 앱에 대한 설명
설명 : 오늘 할 일을 카테고리별로 체크 및 메모를 하여 할 일을 정리할 수 있는 앱

## 주요 기능 
- CRUD 작업

* 추가 기능
- 카테고리별 조회 및 진행률 표시
- 라이트`다크 모드
- Memo 기능

2. 소스 빌드 및 실행 방법 메뉴얼
- 환경 설정 

프론트엔드: React.js
백엔드: Spring Boot
데이터베이스: MySQ

- 라이브러리
백엔드 : Spring Boot, Spring Data JPA, Lombok, MySQL Driver, Swagger
프론트엔드 : React, Axios
- DB 설정
MySQL Workbench Or MySQL에서 1) Migrations\DDL.sql 실행 2) Migrations\DML.sql 실행

- 백엔드 실행
Spring Boot Dashboard 탭 > APPS의 Subject에서 Run 실행

- 프론트엔드 실행
cd todo-frontend
npm install
npm start
cf) DB 스키마 및 기초데이터 백업파일 -> Migrations 폴더에 저장

3. 주력으로 사용한 컴포넌트,라이브러리에 대한 설명 및 사용 이유 기입 
- 컴포넌트
TodoList.js : 할 일 목록을 표시하는 컴포넌트로 API에서 데이터를 불러옴
	    사용 이유 - 전체 할 일 목록을 관리 및 API와의 연동 하여 데이터 동기화
TodoItem.js : 목록에서 각 항목들을 표시하고 체크박스로 완료 상태를 변경, 수정 및 삭제
	     사용 이유 - 사용자가 각 항목들을 관리
TodoForm.js : 새로운 할 일을 추가하는 입력 폼
	      사용 이유 - 할 일을 추가할 때 카테고리, 할 일 입력하여 추가

- 라이브러리
Spring Boot : REST API 서버 구현
	     사용 이유 : 간결한 코드 작성
Spring Data JPA : DB와 연동
	          사용 이유 : 직접 SQL을 사용하지 않고도 사용 가능
Lombok : Getter, Setter 자동 생성 및 코드 간소화
	사용 이유 : 코드 가독성 향상
MySQL : 데이터베이스
	사용 이유 : 요구사항 반영

4. Api 명세 작성 필수  Swagger 등 사용해도 무방함
- Swagger 사용

5. 테스트케이스 작성
![image](https://github.com/user-attachments/assets/1b4067f7-2ba6-4fd8-8013-ca8270f24377)

