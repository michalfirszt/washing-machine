import React from 'react';
import { useDispatch } from 'react-redux';

import * as t from '../../../../actions/actionTypes';

const UsersTable = ({ users }) => {
    const dispatch = useDispatch();

    const handleRemoveUser = userIndex => {
        dispatch({
            type: t.REMOVE_USER,
            payload: userIndex
        })
    };

    return (
        <div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <td>First name</td>
                        <td>Last name</td>
                        <td>Room number</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.roomNumber}</td>
                            <td>
                                <button
                                    className='btn btn-sm btn-danger'
                                    onClick={() => handleRemoveUser(index)}
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;
