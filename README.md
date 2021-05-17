## Day 1
1. npx create-react-app PROJECTNAME : 리액트 프로젝트 생성
2. vscode : JavascriptReact 변경
3. 컴포넌트 생성 및 불러오기
```
불러올 JS
<Modal/>

불러온 JS
export function Modal() {return (CODE)};
```
4. yarn add react-router-dom : 리액트 라우터 설치
5. yarn add cross-env --dev : OS별 경로 맞추는 라이브러리

## DAY 1.5
### 리액트 라우터 실습환경 만들기 
1. 파일제거
- src/App.js
- src/App.css
- src/App.test.js
- src/logo.svg   
   
2. 디렉토리 생성
- src/components: 컴포넌트들이 위치하는 디렉토리입니다.
- src/pages: 각 라우트들이 위치하는 디렉토리 입니다.
- src/client: 브라우저 측에서 사용할 최상위 컴포넌트 입니다. 우리가 추후 서버사이드 렌더링을 구현 할 것이기 때문에 디렉토리를 따로 구분하였습니다. (서버사이드 렌더링을 할 때에는 서버 전용 라우터를 써야합니다.) 여기서 라우터를 설정합니다.
- src/server: 서버측에서 사용 할 리액트 관련 코드를 여기에 넣습니다.
- src/shared: 서버와 클라이언트에서 공용으로 사용되는 컴포넌트 App.js 가 여기에 위치합니다.
- src/lib: 나중에 웹 연동을 구현 할 때 사용 할 API와 코드스플리팅 할 때 필요한 코드가 여기에 위치합니다.

3. package.json 하단 내용으로 변경
```
"scripts": {
    "start": "cross-env NODE_PATH=src react-scripts start",
    "build": "cross-env NODE_PATH=src react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
}
```

