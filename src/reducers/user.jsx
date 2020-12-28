import * as t from "./../actions/actionTypes";

const initialState = {
    users: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case t.ADD_USER:
            return {...state, users: [...state.users, action.payload]}

        case t.REMOVE_USER:
            return {...state, users: [
                ...state.users.slice(0, action.payload),
                ...state.users.slice(action.payload + 1)
            ]}

        default:
            return state;
    }
};
