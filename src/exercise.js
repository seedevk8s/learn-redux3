import { createStore } from 'redux';

// createStore는 스토어를 만들어주는 함수
// 리액트 프로젝트에서는 단 하나의 스토어를 만듦

/* 리덕스에서 관리할 상태 정의*/
const initialState = {
  counter: 0,
  text: '',
  list: []
};

//상태에 어떠한 변화가 필요하게 될 땐, 우리는 액션(Action) 객체란 것을 발생시킵니다.

/* 액션 타입 정의 */
// 액션 타입은 주로 대문자로 작성합니다.
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

/* 액션 생성함수 정의 => 액션 객체를 생성함 */
// 액션 생성함수는 주로 camelCase로 작성함.
function increase() {
    return {
        type: INCREASE      // 액션 객체에는 type값이 필수임.
    };
}

// 화살표 함수로 작성하는 것이 더욱 코드가 간단함
const decrease = () => ({
    type: DECREASE
});

const changeText = text => ({
   type: CHANGE_TEXT,
   text                 // 액션안에는 type외에 추가적인 필드를 마음대로 넣을수 있음.
});

const addToList = item => ({
   type: ADD_TO_LIST,
   item
});

// 리듀서 (Reducer) : 변화를 일으키는 함수임.  현재의 상태와, 전달 받은 액션을 참고하여 새로운 상태를 만들어서 반환하는 함수..
/* 리듀서 만들기 */
// 위 액션 생성함수들을 통해 만들어진 객체를 참조하여
// 새로운 상태를 만드는 함수임.
// 중요-- 리듀서에서는 불변성을 꼭 지켜줘야 함.

function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
              ...state,
              counter: state.counter + 1
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        case CHANGE_TEXT:
            return {
              ...state,
              text: action.text
            };
        case ADD_TO_LIST:
            return {
              ...state,
                list: state.list.concat(action.item)
            };
        default:
            return state;
    }
}

// 스토어 (Store) : 리덕스에서는 한 애플리케이션당 하나의 스토어를 만들게 됨.
// 스토어 안에는, 현재의 앱 상태와, 리듀서가 들어가있고, 추가적으로 몇가지 내장 함수들이 있음.
/* 스토어 만들기 */
const store = createStore(reducer);

console.log(store.getState());  //현재 store 안에 들어있는 상태를 조회.



// 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
/* 스토어는 뷰 레이어 바인딩(listener)에게 애플리케이션 상태가 변경되었다는 것을 알린다. */
const listener = () => {
    const state = store.getState();
    console.log(state);
};
































