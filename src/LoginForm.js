import React, { Component } from 'react';
import axios from 'axios';
import FormFactory from './FormFactory'

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = { action: "", method: "", name: "", response: "" }
  }

  componentDidMount() {
    axios.get('http://34.93.81.178:8081/forms/login')
      .then(response => this.setState({ response: response.data }));

  }

  render() {
    return (
      <div>
        {this.state.response.elements ?
          <form name={this.state.response.name} action={this.state.response.action} method={this.state.response.method} >
            {this.state.response.elements.map(element => {
              return <FormFactory attribs={element} />
            })
            }
          </form>
          : ""
        }
      </div>
    );
  }
}

export default LoginForm;