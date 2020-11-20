
export function sendAction() {
    console.log(1);
    
    let action = {
        type: 'ADD',
        payload: 2
    };
    return action
}

export default {sendAction}