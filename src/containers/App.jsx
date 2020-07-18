import React, {useEffect} from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {renderToStaticMarkup} from 'react-dom/server';
import {withLocalize} from "react-localize-redux";

import ListUser from './page/ListUser';
import StateEg from './page/StateEg';
import Toast from '../components/Toast';
import enTranslation from '../i18n/translation/en.js';
import viTranslation from '../i18n/translation/vi.js';

const App = (...props) => {
    useEffect(() => {
        props[0].initialize({
            languages: [
                {code: "en"},
                {code: "vi"},
            ],
            options: {renderToStaticMarkup}
        });
        props[0].addTranslationForLanguage(enTranslation, "en");
        props[0].addTranslationForLanguage(viTranslation, "vi")
    }, []);

    return (
        <div className="content-wrapper">
            <BrowserRouter>
                <Switch>
                    <Route path="/list-user" component={ListUser} />
                    <Route path="/state-eg" component={StateEg} />
                </Switch>
            </BrowserRouter>
            <Toast/>
        </div>
    );
};

export default withLocalize(App);
