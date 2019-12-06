import React from 'react';

class PasswordInput extends React.Component {
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
        const { name, placeholder, type } = this.props.attribs
        return (
            <div>
                <input type={type} name={name} onChange={e => this.handleChange(e.target.value)} value={this.state.value} className={this.state.class} placeholder={placeholder} />
            </div>
        );
    }
}

export default PasswordInput;
