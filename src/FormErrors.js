import React, { Component } from 'react';

class FormErrors extends Component {
  render() {
    const errors = this.props.errors

    return (
      <div>
        {errors ? errors.forEach(error => {
          return <strong>{error}</strong>
        })
          : ""
        }
      </div>
    );
  }

}

export default FormErrors;