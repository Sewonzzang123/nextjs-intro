NextJS introduction

next.js의 특징

react.js와의 차별점은?

파일 생성

npx create-next-app@latest --typescript

framework, libraray

librarary : 내가 불러와서 쓰는거야. 원하는 대로 코드를 작성가능, 라이브러리는 사용하고싶을때 사용가능.

framework : 내 코드를 불러오는거야. 코드를 적절한 위치에 잘 적기만 하면 불러와서 모든걸 동작하게 됨,내가 폴더를 만들거나 뭐든 할 수 있음. 폴더구조나 소스코드를 자유로 할 수 있음.(ex next.js)

pages의 파일명이 url이 될거야. 매우 편리함.

중요한 점은 파일의 이름..! 이름이 그대로 url로 들어감, component의 이름은 중요하지 않음.

중요한건 export default 로 해줘야 해. 안한다면, 에러가 발생함.

404 page를 직접 만들 필요가 없음.

예외 index (/index > 404)

jsx를 쓴다면 import react할 필요 없음. 파일에 improt 없이 아래와 같이 사용해도 괜찮!

```
export default function Potato() {
return (
<div>
<h1>123</h1>about us
</div>
);
}'
```

--

Static Pre Rendering

next.js의 가장 좋은 기능은 앱에 있는 페이지들이 미리 랜더링됨.

react.js vs next.js

react.js

client-side 랜더링 : 브라우저가 유저를 보는 UI를 만드는 모든 것을 한다는 의미임.

브라우저가 자바스크립트를 가져와서 clinet-side의 자바스크립트가 모든 UI를 만듦.

왜냐면, 이것만이 유저가 보는것임(div id=root) 자바스크립트를 비활성화한 사람이 화면을 보게 된다면, noscript되어있는 부분만 볼 수 있음.

느린 연결을 하고 있다면, 흰 화면에 react를 다운로드 할 때 까지 기다려야 하는부분. 사용자단에서 불편함을 느낄 수 있다.

next.js

페이지 소스코드 안에 실제 HTML이 있는것을 볼 수 있음. 유저가 매우 느린 연결을 하고 있거나, 자바스크립트가 완전 비활성화인 경우에도 html은 바로 볼 수 있어, fetch가 조금 느리더라도.

hydration : react.js를 프론트엔드 안에서 실행하는것을 말함.

소스코드를 본다면, 우리 앱의 초기 상태를 활용해서 미리 렌더링이 되어있어. > pre-rendering

페이지가 로딩 될 때, react.js가 넘겨받아서 완벽하게 잘 동작함.

--

Routing

네비게이션 컴포넌트

NextJS에서 anchor 태그를 네비에기팅 하는 데에 사용하면 안되는 이유:

NextJS에 앱 네에서 페이지를 네비게이트 할 때 사용해야만 하는 특정 컴포넌트가 존재함.

페이지에 들어가면 어플리케이션이 새로고침되어서 느림..

NextJS에서는 Link 태그를 사용함. (Link안에 a태그를 넣었으나 13버전부터 a태그에 넣던 속성을 Link태그안에 넣어도 적용이 잘 되어 사용하지 않는다.)

useRouter

next, react, readt-dom을 NextJS에서 가지고 있기 때문에 바로 가져다가 쓰면 됨.

--

CSS Modules

modules를 사용하기(filename.modules.css)

class의 충돌이 나지 않게 도와줌.(class명에 무작위 단어로 만들어줌.)

--

Styles JSX

styles를 추가하는 다른 방법 : styled jsx

NextJS의 고유한 방법

style 태그를 열어 jsx와 global을 작성 해 둔 후 {``} 안에 스타일 작성.

global을 적용하면 전역적으로 스타일이 먹어서 좋은 방법이 아닐거같음.. 예전엔 안그랬는뎅

--

Custom App

Global styles적용하기

NextJS 컨셉을 알아야함.

App Component, App Pages

NextJS는 \_app.tsx를 먼저 보고 그 후에 페이지를 봄.

\_app.tsx는 서버로 요청이 들어왔을 때 가장 먼저 실행되는 컴포넌트를 의미.

모든 페이지는 이곳을 통하게 되고 공통 레이아웃을 만들때 사용

글로벌 CSS 적용

(
\_app.tsx가 안보여지는 이슈가 있었는데, next.config.js에 다음을 추가하였더니 동작.
const nextConfig = { reactStrictMode: false };
)

--
