
let defaultState = { count: 0 };
export const Counter = (state = defaultState, action: { type: string, payload: number }) => {
    console.log(action.type);
    switch (action.type) {
        case 'ADD':
            return Object.assign({},state,{ count: state.count + 5 });
        case 'DEL':
            return Object.assign({},state,{ count: state.count + action.payload });
        default:
            return state
    }
}
