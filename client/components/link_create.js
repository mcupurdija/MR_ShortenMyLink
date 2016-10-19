import React, {PropTypes} from 'react'

class LinkCreate extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        Meteor.call("links.insert", this.refs.link.value, function(error, result) {
            if (error) {
                console.log("error", error);
            }
            if (result) {
                console.log("result", result);
            }
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Link to shorten</label>
                    <input ref="link" className="form-control"/>
                </div>
                <button className="btn btn-primary">Shorten!</button>
            </form>
        );
    }
}

export default LinkCreate;
