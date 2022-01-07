export function reducers(state, action) {
    switch (action.type) {
        case 'add2':
            return { ...state, number: state.number + 2 };

        case "login":
            return { ...state, user: { name: action.name } }
        default:
            return state;
    }
}