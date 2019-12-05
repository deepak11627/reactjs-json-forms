import React from 'react';


const withValidators = (ElementComponent) => {
  return class ElementWithValidators extends React.Component {
    render() {
      const attribs = this.props.attribs
      return (
        <>
          {attribs.required ?
            <div>
              <ElementComponent {...this.props} />
              {/*<div className="danger hide">{attribs.errMessage}</div>*/}
            </div> :
            <ElementComponent {...this.props} />
          }
        </>
      )
    }
  }
}

export default withValidators