import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';

import * as t from '../../../../actions/actionTypes';

const reducer = (state, action) => {
    switch (action.type) {
        case "setFirstName":
            return {...state, firstName: action.payload};

        case "setLastName":
            return {...state, lastName: action.payload};

        case "setRoomNUmber":
            return {...state, roomNUmber: action.payload};

        case "clearData":
            return {
                ...state,
                firstName: '',
                lastName: '',
                roomNUmber: 0
            };
    
        default:
            return state;
    }
};

const UserFrom = () => {
    const storeDispatch = useDispatch();

    const initialState = {
        firstName: '',
        lastName: '',
        roomNUmber: 0
    };

    const [{ firstName, lastName, roomNUmber }, dispatch] = useReducer(
        reducer,
        initialState
    );

    const handleSubmit = () => {
        storeDispatch({
            type: t.ADD_USER,
            payload: {
                firstName: firstName,
                lastName: lastName,
                roomNUmber: roomNUmber
            }
        });

        dispatch({ type: 'clearData', payload: null });
    };

    return (
        <div>
            <div className='form-group'>
                <label htmlFor='first-name-input'>
                    First name
                </label>
                <input
                    id='first-name-input'
                    type='text'
                    className='form-control'
                    value={firstName}
                    onChange={event => dispatch({ type: 'setFirstName', payload: event.target.value })}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='last-name-input'>
                    Last name
                </label>
                <input
                    id='last-name-input'
                    type='text'
                    className='form-control'
                    value={lastName}
                    onChange={event => dispatch({ type: 'setLastName', payload: event.target.value })}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='room-number-input'>
                    Room number
                </label>
                <input
                    id='oom-number-input'
                    type='number'
                    className='form-control'
                    value={roomNUmber}
                    onChange={event => dispatch({ type: 'setRoomNUmber', payload: +event.target.value })}
                />
            </div>
            <div className='form-group'>
                <input
                    type="submit"
                    className='btn btn-primary'
                    value='Add user'
                    onClick={handleSubmit}
                    disabled={firstName.length === 0 || lastName.length === 0} />
            </div>
        </div>
    );
};

export default UserFrom;
