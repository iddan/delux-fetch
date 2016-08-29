module.exports = function (action) {
    if (action.payload.request) {
        let url;
        let settings = action.payload.request;
        if (typeof settings == 'string') {
            url = settings;
        }
        else {
            url = settings.url;
        }
        return fetch(url, settings)
        .then(response => Object.assign(action.payload, {response}))
        .catch(error => Object.assign(action, {
            payload: error,
            error: true
        }));
    }
};
