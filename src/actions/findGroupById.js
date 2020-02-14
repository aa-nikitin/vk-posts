import { createActions } from 'redux-actions';

const {
    find: {
        group: {
            fetch: {
                request: fetchFindGroupByIdRequest,
                success: fetchFindGroupByIdSuccess,
                error: fetchFindGroupByIdFailure
            }
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
                }
            }
        }
    },
    { namespace: '_' }
);

export {
    fetchFindGroupByIdRequest,
    fetchFindGroupByIdSuccess,
    fetchFindGroupByIdFailure
};
