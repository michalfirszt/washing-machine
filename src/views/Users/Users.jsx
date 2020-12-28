import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import UserForm from './components/UserForm';
import UsersTable from './components/UsersTable';

const Users = () => {
    const users = useSelector(state => state.user.users);

    return (
        <Container className='mt-4'>
            <Row>
                <Col xs={8}>
                    <UsersTable users={users} />
                </Col>
                <Col xs={4}>
                    <UserForm />
                </Col>
            </Row>
        </Container>
    );
};

export default Users;
