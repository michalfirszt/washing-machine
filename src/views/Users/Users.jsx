import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import * as t from '../../actions/actionTypes';
import UserForm from './components/UserForm';
import UsersTable from './components/UsersTable';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.user.users);

    const handleSubmitForm = values => {
        dispatch({
            type: t.ADD_USER,
            payload: {
                firstName: values.firstName,
                lastName: values.lastName,
                roomNumber: values.roomNumber
            }
        });
    };

    return (
        <Container className='mt-4'>
            <Row>
                <Col xs={8}>
                    <UsersTable users={users} />
                </Col>
                <Col xs={4}>
                    <UserForm onSubmit={handleSubmitForm} />
                </Col>
            </Row>
        </Container>
    );
};

export default Users;
