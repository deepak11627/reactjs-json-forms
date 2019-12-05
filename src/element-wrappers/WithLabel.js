import React from 'react';


const withLabel = (ElementComponent) => {
  return class ElementWithLabel extends React.Component {
    render() {
      const attribs = this.props.attribs
      return (
        <>
          {attribs.label ?
            <div>
              <label> {attribs.label}: </label>
              <ElementComponent {...this.props} />
            </div> :
            <ElementComponent {...this.props} />
          }
        </>
      )
    }
  }
}

export default withLabel