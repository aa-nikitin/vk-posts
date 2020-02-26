import { createActions } from 'redux-actions';

const {
    settings: { user: settingsUserSave }
} = createActions(
    {
        SETTINGS: {
            USER: null
        }
    },
    { namespace: '_' }
);

export { settingsUserSave };
