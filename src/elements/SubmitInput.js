import React from 'react';

class SubmitInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: props.value, class: props.className }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        console.log("Updating submit button value")
        this.setState({ value: value })
    }

    render() {
        return (
            <div>
                <input type="submit" name={this.props.name} onChange={e => this.handleChange(e.target.value)} value={this.state.value} className={this.state.class} />
            </div>
        );
    }
}

export default SubmitInput;
