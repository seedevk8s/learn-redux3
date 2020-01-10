import React from 'react';
import Counter from "../components/Counter";
import {useSelector, useDispatch } from "react-redux";

function CounterContainer() {

    // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
    // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
    const { number, diff } = useSelector( state => ({
        number: state.counter.number,
        diff: state.counter.diff
    }));

    return (
        <Counter>

        </Counter>
    );
}


export default CounterContainer;


