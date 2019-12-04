import React, { Component } from 'react';
import TextInput from './elements/TextInput';
import SubmitInput from './elements/SubmitInput';
import PasswordInput from './elements/PasswordInput';


class FormFactory extends Component {
  render() {
    const components = {
      text: TextInput,
      password: PasswordInput,
      submit: SubmitInput
    };

    const Element = components[this.props.attribs.type]
    return (
      <div>
        <Element attribs={this.props.attribs} />
      </div>
    );
  }
}

export default FormFactory;