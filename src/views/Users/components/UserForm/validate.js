const validate = values => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Can not be empty';
    }

    if (!values.lastName) {
        errors.lastName = 'Can not be empty';
    }

    if (!values.roomNumber) {
        errors.roomNumber = 'Can not be empty';
    }

    return errors;
};

export default validate;
