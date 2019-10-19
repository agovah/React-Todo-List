import React, { Component } from "react";

class Form extends Component {
    state = {
        newTask: ""
    };

    handleChange = event => {
        this.setState({ newTask: event.currentTarget.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        const id = new Date().getTime();
        const description = this.state.newTask;

        this.props.onAddTask({ id, description });

        this.setState({ nouveauClient: "" });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input className="form-control" value={this.state.newTask} onChange={this.handleChange} type="text" placeholder="Add new task"/>
                </div>
                <div className="form-group text-center">
                    <button className="btn btn-success">Add</button>
                </div>
            </form>
        );
    }
}

export default Form;
