import React from 'react'

// const Header = ({title}) => {
const Header = (props) => {
    return (
        <div> 
        <header>
        {/* <h1>{title}</h1> */}
        <h1>{props.title}</h1>
        </header>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header

