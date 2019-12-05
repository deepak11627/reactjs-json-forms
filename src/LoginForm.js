import React, { Component } from 'react';
import axios from 'axios';
import ElementFactory from './ElementFactory'
import FormErrors from './FormErrors'

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = { action: "", method: "", name: "", response: {}, elements: [], errors: [] }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    console.log("Form submitted")
    e.preventDefault()

    let errors = [];
    //    check all the required fields in the form
    this.state.elements.forEach(element => {
      console.log(element.props.attribs)
      const msg = element.validate()
      if (msg) {
        errors.push(msg)
      }
    })
    this.setState({ errors: errors })
    //this.refs.username.validate()
  }

  componentDidMount() {
    axios.get('http://34.93.81.178:8081/forms/login')
      .then(response => {
        this.setState({ response: response.data })
        let elements = [];
        if (this.state.response.elements) {
          this.state.response.elements.forEach(element => {
            elements.push(<ElementFactory attribs={element} key={element.name} />)
          })
          this.setState({ elements: elements })
        }
      });
  }

  render() {
    return (
      <div>
        <FormErrors errors={this.state.errors} />
        {this.state.elements ?
          <form name={this.state.response.name} action={this.state.response.action} method={this.state.response.method} onSubmit={this.handleSubmit}>
            {this.state.elements}
          </form>
          : ""
        }
      </div>
    );
  }
}

export default LoginForm;