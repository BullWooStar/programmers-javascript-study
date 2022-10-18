## 필수 구현사항 #49

- [x] function style의 문법을 사용하기
- [x] new 키워드를 사용하기
- [x] parameter로 data를 넘겨 받기
- [x] render 함수를 작성하기
      </br>
- data 값을 받아 `map` 연산자로 객체를 돌며 todo의 text가 렌더링이 되도록 코드를 짰습니다.
- 배열에 포함된 문자열을 하나로 합치기위해 `join` 메서드를 사용하였습니다.

## 보너스 구현사항 #50

- [x] null 혹은 undefined가 넘어올 때 에러 발생하게 하기
- [x] array가 아닌 형태로 넘어올 때 에러 발생하게 하기
- [x] 데이터 내용이 이상하면 에러 발생하게 하기
- [x] new 키워드 안 붙이고 함수 실행 시 에러 발생하게 하기
      </br>
- 렌더함수에서 렌더링을 하기전 `if`문을 사용하여 data를 검증시키도록 하였습니다.
- `Array.isArray`를 사용하여 data의 type이 배열인지를 검증하고 `every`를 사용하여 배열을 돌며 객체에 'text' key가 있는지, value가 비어있지 않았는지를 검증하였습니다.
- `!new.target`을 사용하여 new 키워드를 사용하였는지를 검증하였습니다.

## 보너스 구현사항 #57

- [x] todo를 담고 있는 array data를 두 개 더 만들기
- [x] `TodoList`컴포넌트를 총 세 개 만들기
      </br>
- 기존 렌더함수를 재사용하기 위해 렌더함수의 parameter로 target이 될 `divId`를 새로 받을수 있게 하였습니다

## 보너스 구현사항 #66

- [x] data의 각 object에 `isCompleted`라는 필드를 추가하기
- [x] 해당 값은 true, 혹은 false 값으로 지정하기
- [x] `isCompleted`값이 true인 경우 `<s>`태그로 삭선처리하기
      </br>
- 렌더링 함수 `innerHTML`의 부분에 삼항연산자를 사용해 `isCompleted`에 따라 어떠한 태그가 들어갈지를 결정하게 했습니다.

## 보너스 구현사항 #67

- [x] `setState(nextData)`라는 함수 만들기
- [x] `setState()` 함수 내에서 화면을 다시 렌더링하기
      </br>
- 렌더링함수를 거의 그대로 사용해서 parameter로 들어오는 nextData가 재렌더링 되도록 하였습니다.
- 컴포넌트가 세 개 이기에 target 컴포넌트를 지정할수있도록 parameter를 하나 더 추가하였습니다.

## 느낌점 및 아쉬운점

- 리액트가 아닌 바닐라 자바스크립트로 컴포넌트를 만들어서 화면에 렌더링한다는 것을 이전에는 생각치도 못했는데 이번 기회에 시도해보고 공부해볼수 있어서 매우 재미있게 미션을 했습니다.

- 전체적으로 함수가 논리적이지 못하고 꼬리에 꼬리를 무는 식의 느낌이 강했던것 같습니다. 더 논리적이고 깔끔하게 코드를 짤수 있을것 같은데 아직 보이지 않는것 같습니다. 특히 data 검증부분의 코드가 아쉬움이 많이 남습니다.