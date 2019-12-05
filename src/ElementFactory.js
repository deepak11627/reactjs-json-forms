import React, { Component } from 'react';
import withLabel from './element-wrappers/WithLabel';
import withValidators from './element-wrappers/WithValidators';

import TextInput from './elements/TextInput';
import SubmitInput from './elements/SubmitInput';
import PasswordInput from './elements/PasswordInput';


class ElementFactory extends Component {

  render() {
    const components = {
      text: TextInput,
      password: PasswordInput,
      submit: SubmitInput
    };

    const Element = components[this.props.attribs.type]
    return <Element attribs={this.props.attribs} />
  }
}

export default withLabel(ElementFactory);