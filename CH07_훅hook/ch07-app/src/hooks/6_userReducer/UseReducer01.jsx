/** useReducer
 * : state 생성 및 관리 도구
 * 
 * 언제 사용하지?
 * : 여러 개의 하위값을 갖는 복잡한 state를 다뤄야할 때
 * {
 *    teacher: '터피',
 *    students: ['','','']
 *    count: 3,
 *    location: [{country:'korea', name: '베리'}, {}, {}]
 * }
 * 
 * 3가지 기본 개념 요소
 * 
 * [Reducer]
 * : 컴포넌트 state 값 변경('은행')
 * (작업반장)
 * 
 * [Dispatch]
 * : 컴포넌트의 state 변경 요청('고객')
 * (파라미터에 요청 정보를 담아서 보내는 인터페이스 같은 것 !)
 * (배달부)
 * 
 * [Action]
 * : 컴포넌트의 state 변경 내용('만원 출금')
 * (배달할 알맹이)
 * 
 * Dispatch(Action) ---> Reducer(State, Action) ===> State Update
 * 
 */