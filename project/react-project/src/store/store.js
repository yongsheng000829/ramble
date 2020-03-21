import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let initData = {

};

let actions = {

};

let reducer = (state = initData, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    actions[action.type] && actions[action.type](newState, action.value);
    return newState;
}

export default createStore(reducer, applyMiddleware(thunk));