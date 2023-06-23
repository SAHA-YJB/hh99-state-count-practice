# const
setState 함수는 함수안에서 변경하기에 const키워드
let을 사용할 필요가 없다.

값이 바뀌지 않는 한 (함수포함=값으로 나오는 함수는 상태를 보고 값이 바뀐다면 let) const키워드로 선언
함수안에서 지역변수로 let은 가능 함수가 끝나면 팅길 친구임

# ++conut는 재할당 하는 것 
count = count + 1 
다시 할당하는 것이기 때문에 const가 먹히지 않았다.
setState(count + 1)로 const 키워드 사용 가능

#노란색 줄
이 나오는 것은 작동은 하나 문제는 있는 것이다. eslint
