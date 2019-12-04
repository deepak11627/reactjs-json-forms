import React, { Component } from 'react';
//import Input from '../Input';

class PasswordInput extends Component {
    constructor(props) {
        super(props);
        this.state = { value: props.value, class: props.class }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        console.log("Updating password input box value")
        this.setState({ value: value })
    }

    render() {
        return (
            <div>
                <input type="password" name={this.props.name} onChange={e => this.handleChange(e.target.value)} value={this.state.value} />
            </div>
        );
    }
}

export default PasswordInput;
