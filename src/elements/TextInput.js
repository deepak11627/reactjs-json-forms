import React, { Component } from 'react';
//import Input from '../Input';

class TextInput extends Component {
    constructor(props) {
        super(props);
        this.state = { value: props.value, class: props.className }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        console.log("Updating text box value")
        this.setState({ value: value })
    }

    render() {
        const { name } = this.props.attribs
        return (
            <div>
                <input type="text" name={name} onChange={e => this.handleChange(e.target.value)} value={this.state.value} className={this.state.class} />
            </div>
        );
    }
}

export default TextInput;
