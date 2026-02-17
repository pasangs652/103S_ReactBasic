import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
    return (
        <div>
            <button style={{ backgroundColor: '${props.bgColor}' }}>{props.ButtonText}</button>
        </div>
    )
}

Button.PropTypes = {
    ButtonText: PropTypes.string
}

// Button.defaultProps = {
//    bgColor: 'red'
//    ButtonText : "Hello World"
// } 

export default Button