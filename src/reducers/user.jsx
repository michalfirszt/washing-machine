import * as t from "./../actions/actionTypes";

const initialState = {
    users: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case t.ADD_USER:
            return {...state, users: [...state.users, action.payload]}

        default:
            return state;
    }
};
