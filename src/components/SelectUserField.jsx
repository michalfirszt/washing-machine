import React from 'react';

const SelectUserField = ({
    input,
    options,
    value,
    meta: { error },
    ...rest
  }) => {
    const parseData = user => {
        return JSON.parse(user);
    };
  
    return (
        <>
            <select
                className='form-control'
                onBlur={event => input.onBlur(parseData(event.target.value))}
                onChange={event => input.onChange(parseData(event.target.value))}
                {...rest}
            >
            <option selected disabled>-- Select User --</option>
                {options.map((user, userIndex) => (
                    <option
                        key={userIndex}            
                        value={JSON.stringify(user)}
                    >
                        {user.firstName + ' ' + user.lastName}
                    </option>
                ))}
            </select>
            <span className="reservations__error">{error}</span>
        </>
    );
};

export default SelectUserField;
