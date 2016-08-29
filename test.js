const Store = require('delux');
const fetchMiddleware = require('.');
require('isomorphic-fetch');

let store = new Store();

store.use(fetchMiddleware);

store.sites = new Store.Collection ({});

store.sites.on('addSite', (action, sites) => {
    sites[action.payload.name] = action.payload.response;
});

store.observe('sites', state => console.log(state.sites.Google));

store.dispatch({
    type: 'addSite',
    payload: {
        name: 'Google',
        request: 'https://google.com'
    }
});
