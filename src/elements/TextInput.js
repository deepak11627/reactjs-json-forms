import React from 'react';

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: props.attribs.value, class: props.attribs.class, validators: [] }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        console.log("Updating text box value")
        this.setState({ value: value })
    }

    render() {
        const { name, placeholder, type, validate } = this.props.attribs
        // validate.push(this.state.class)
        // const validatorClasses = validate.join(" ")
        return (
            <>
                <input type={type} name={name} onChange={e => this.handleChange(e.target.value)} value={this.state.value} className={this.state.class} placeholder={placeholder} ref={this.props.name} />
            </>
        );
    }
}



export default TextInput;
