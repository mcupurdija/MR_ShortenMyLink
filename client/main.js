import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import LinkCreate from './components/link_create';
import {Links} from '../imports/collections/links';

const App = (props) => {
    return (
        <div>
            <Header/>
            <div className="container">
                <LinkCreate/>
            </div>
        </div>
    );
};

Meteor.startup(function() {
    ReactDOM.render(
        <App/>, document.querySelector('.render-target'));
});
