import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import { Provider } from 'react-redux';
import { createStore } from "redux";
import rootReducer from './modules';

// 스토어를 만듭니다.
const store = createStore(rootReducer);
// 스토어의 상태를 확인해봅시다.
console.log(store.getState());



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
