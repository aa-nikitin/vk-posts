import { createActions } from 'redux-actions';

const {
    find: {
        group: {
            fetch: {
                request: fetchFindGroupByIdRequest,
                success: fetchFindGroupByIdSuccess,
                error: fetchFindGroupByIdFailure
            },
            clear: clearFindGroupById
        }
    }
} = createActions(
    {
        FIND: {
            GROUP: {
                FETCH: {
                    REQUEST: null,
                    SUCCESS: null,
                    ERROR: null
                },
                CLEAR: null
            }
        }
    },
    { namespace: '_' }
);

export {
    fetchFindGroupByIdRequest,
    fetchFindGroupByIdSuccess,
    fetchFindGroupByIdFailure,
    clearFindGroupById
};
