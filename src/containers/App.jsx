import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { renderToStaticMarkup } from 'react-dom/server';
import { withLocalize } from 'react-localize-redux';

import ListUser from './page/ListUser';
import StateEg from './page/StateEg';
import Top from './page/Top';
import Toast from '../components/Toast';
import enTranslation from '../i18n/translation/en.js';
import viTranslation from '../i18n/translation/vi.js';
import Login from './page/Login/index';
import Register from './page/Register/index';
import ForgotPass from './page/ForgotPass/index';
import Table from './page/Table/index';

const App = (...props) => {
  useEffect(() => {
    props[0].initialize({
      languages: [{ code: 'en' }, { code: 'vi' }],
      options: { renderToStaticMarkup },
    });
    props[0].addTranslationForLanguage(enTranslation, 'en');
    props[0].addTranslationForLanguage(viTranslation, 'vi');
  }, []);

  return (
    <div className="content-wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path="/list" component={ListUser} />
          <Route exact path="/" component={Top} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/state-eg" component={StateEg} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgot-password" component={ForgotPass} />
          <Route exact path="/table" component={Table} />
        </Switch>
      </BrowserRouter>
      <Toast />
    </div>
  );
};

export default withLocalize(App);
