import { createActions } from 'redux-actions';

const {
    settings: {
        user: { set: settingsUserSet }
    }
} = createActions(
    {
        SETTINGS: {
            USER: {
                SET: null
            }
        }
    },
    { namespace: '_' }
);

export { settingsUserSet };
