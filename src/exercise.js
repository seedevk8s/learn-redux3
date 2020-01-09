import { createStore } from "redux";

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

















