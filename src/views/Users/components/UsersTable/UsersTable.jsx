import React from 'react';

const UsersTable = ({ users }) => {
    return (
        <div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <td>First name</td>
                        <td>Last name</td>
                        <td>Room number</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.roomNUmber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;
