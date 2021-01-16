import moment from 'moment';
import { WEEK_DAYS } from '../common/constants';

const validate = values => {
    const errors = {};

    WEEK_DAYS.forEach(day => {
        if (values[day] && values[day].length) {
            const dayErrors = [];

            values[day].forEach((entity, entityIndex) => {
                const entityErrors = {};
                const otherEntities = values[day].filter((item, itemIndex) => {
                    if (entityIndex !== itemIndex) {
                        return item;
                    }
                });
                const conflictedEntity = otherEntities.find(item => {
                    return moment(entity.start).isBetween(item.start, item.end) || moment(entity.end).isBetween(item.start, item.end);
                });

                if (!entity || !entity.start) {
                    entityErrors.start = 'Can not be empty';
                    dayErrors[entityIndex] = entityErrors;
                }

                if (!entity || !entity.end) {
                    entityErrors.end = 'Can not be empty';
                    dayErrors[entityIndex] = entityErrors;
                }

                if (!entity || !entity.user) {
                    entityErrors.user = 'Can not be empty';
                    dayErrors[entityIndex] = entityErrors;
                }

                if (entity.start && entity.end) {
                    if (moment(entity.start).isAfter(entity.end)) {
                        entityErrors.end = 'End time should be after start time';
                        dayErrors[entityIndex] = entityErrors;
                    } else if (!moment(entity.end).isBetween(entity.start, moment(entity.start).add(151, 'minutes'))) {
                        entityErrors.end = 'Reservation too long';
                        dayErrors[entityIndex] = entityErrors;
                    }
                }

                if (conflictedEntity) {
                    entityErrors.start = 'Conflict between two reservations';
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
