import React, { Component } from 'react';
import GenericInput from './GenericInput';
import NotEmptyValidator from './../validators/NotEmpty'

class TextInput extends GenericInput {
    constructor(props) {
        super(props);
        this.state = { value: props.value, class: props.className, validators: [] }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        console.log("Updating text box value")
        this.setState({ value: value })
    }

    validate() {
        console.log("Validate")
        let v = new NotEmptyValidator();
        if (!v.isValid(this.state.value)) {
            return this.props.errMessage
        }
        return null
    }

    render() {
        const { name, placeholder, type } = this.props.attribs
        return (
            <div>
                <input type={type} name={name} onChange={e => this.handleChange(e.target.value)} value={this.state.value} className={this.state.class} placeholder={placeholder} />
            </div>
        );
    }
}

export default TextInput;
