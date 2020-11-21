
export function sendAction() {
    let action = {
        type: 'ADD',
        payload: 2
    };
    return action
}

export default { sendAction }