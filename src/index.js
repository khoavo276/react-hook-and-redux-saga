import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './containers/App';
import store from './store';
import { unregister } from './serviceWorker';
import './index.scss';
import { I18nextProvider } from 'react-i18next';
import {LocalizeProvider} from 'react-localize-redux';

import i18n from './i18n';
import './assets/scss/main.scss';
import '@fortawesome/fontawesome-free/js/all.js';
import './assets/css/sb-admin-2.min.css';

ReactDOM.render(
    <LocalizeProvider>
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        </Provider>
    </LocalizeProvider>,
    /*eslint-disable-next-line*/
    document.getElementById('root')
);

unregister();
