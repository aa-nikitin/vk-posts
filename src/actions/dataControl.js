import { createActions } from 'redux-actions';

const {
    data: {
        save: {
            request: dataSaveRequest,
            success: dataSaveSuccess,
            error: dataSaveFailure
        }
    }
} = createActions(
    {
        DATA: {
            SAVE: {
                REQUEST: null,
                SUCCESS: null,
                ERROR: null
            }
        }
    },
    { namespace: '_' }
);

export { dataSaveRequest, dataSaveSuccess, dataSaveFailure };
