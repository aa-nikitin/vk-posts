import { createActions } from 'redux-actions';

const {
    data: {
        save: {
            request: dataSaveRequest,
            success: dataSaveSuccess,
            error: dataSaveFailure
        },
        load: {
            request: dataLoadRequest,
            success: dataLoadSuccess,
            error: dataLoadFailure
        }
    }
} = createActions(
    {
        DATA: {
            SAVE: {
                REQUEST: null,
                SUCCESS: null,
                ERROR: null
            },
            LOAD: {
                REQUEST: null,
                SUCCESS: null,
                ERROR: null
            }
        }
    },
    { namespace: '_' }
);

export {
    dataSaveRequest,
    dataSaveSuccess,
    dataSaveFailure,
    dataLoadRequest,
    dataLoadSuccess,
    dataLoadFailure
};
