import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

const App = (props) => {
    return (
        <div>
            <Header/>
            <div className="container">
                <h1>Hello</h1>
            </div>
        </div>
    );
};

Meteor.startup(function() {
    ReactDOM.render(
        <App/>, document.querySelector('.render-target'));
});
