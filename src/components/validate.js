import { WEEK_DAYS } from '../common/constants';

const validate = values => {
    const errors = {};

    WEEK_DAYS.forEach(day => {
        if (values[day] && values[day].length) {
            const dayErrors = [];

            values[day].forEach((entity, entityIndex) => {
                const entityErrors = {};

                if (!entity || !entity.start) {
                    entityErrors.start = 'Can not be empty';
                    dayErrors[entityIndex] = entityErrors;
                }

                if (!entity || !entity.end) {
                    entityErrors.end = 'Can not be empty';
                    dayErrors[entityIndex] = entityErrors;
                }
            });

            if (dayErrors.length) {
                errors[day] = dayErrors;
            }
        }
    });

    return errors;
};

export default validate;
