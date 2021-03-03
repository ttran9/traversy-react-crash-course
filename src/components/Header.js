import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {
// const Header = (props) => {
    return (
        <div> 
            <header className='header'>
                <h1>{title}</h1>
                <Button color = 'green' text='Add'/>
                {/* <Button color = 'red' text='Hello 1!'/> */}
                {/* <Button color = 'blue' text='Hello 3!'/> */}
                {/* <h1>{props.title}</h1> */}
                {/* <h1 style={headingStyle}>{props.title}</h1> */}
            </header>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// CSS in JS.
const headingStyle = {
    color: 'red', 
    backgroundColor: 'black'
}

export default Header

