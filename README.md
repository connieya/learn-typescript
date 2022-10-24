# 타입스크립트


- [강의  교안](https://joshua1988.github.io/ts/)

## 타입스크립트란?

자바스크립트에 타입을 부여한 언어로, 자바스크립트의 확장된 언어라고 볼 수 있다.

타입스크립트는 자바스크립트와 다르게 브라우저에서 실행하기 위해 파일을 한번 변환해주어야 한다.

=> javascript + typed

## 타입스크립트를 쓰면 좋은 이유

타입스크립트는 자바스크립트의 모든 단점을 보완해 만든 언어이다. 

동적인 자바스크립트 언어에 타입을 미리 부여함으로써 컴파일시 에러를 잡을 수 가 있다.


## type 과 interface 의 차이



#### 선언적 확장

type 은 새로운 속성을 추가하기 위해서 다시 같은 이름을 선언할 수 없지만, interface는 항상
선언적 확장이 가능하다.

```javascript
interface User {
    name : string
}

interface User {
    lastName : string
}

interface User {
    health : number
}
```

아래 코드는 에러 발생

```javascript
type User {
  name: string;
}

type User {
  lastName: string;
}

type User {
  health: number;
}
```


## 타입스크립트 적용

- 컴파일
  - .ts 파일 =>  .js 파일

- npm i typescript -g
- tsc index.ts
  - index.ts => index.js 컴파일 하는 명령어


## 타입스크립트 설정

- [타입스크립트 TSconfig Reference](https://www.typescriptlang.org/tsconfig)
- [타입스크립트 컬파일 옵션](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- [타입스크립트 플레이그라운드](https://www.typescriptlang.org/play)
- [바벨 사이트](https://babeljs.io/)

## git convention

- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서 수정
- style : 코드 포맷팅 , 세미콜론 누락, 코드 변경이 없는 경우
- refactor : 코드 리팩토링
- test : 테스트 코드, 리펙토링 테스트 코드 추가
- chore : 빌드 업무 수정, 패키지 매니저 수정