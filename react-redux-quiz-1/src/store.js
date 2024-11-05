import { createStore } from "redux";

function reducer(oldState, action) {

    let newState = { ...oldState }

    switch (action.type) {
        case '+':
            newState.result = action.num1 + action.num2;
            break;
        case '-':
            newState.result = action.num1 - action.num2;
            break;
        case '*':
            newState.result = action.num1 * action.num2;
            break;
        case '/':
            newState.result = action.num1 / action.num2;
            break;
        case '0':
            newState.result = null;
            break;
        default:
            newState.result = null;
    }

    return newState;
}

const init = { result: null }

export const store = createStore(reducer, init);