import React from 'react'
// import {Link} from "react-router-dom"
// import Dashboard from "./Dashboard"
const Header = (props) => {
  
    return (
        
        <div className='header'>
            <h2>{props.title}</h2>
            {/* <h4><Link to="/">Home</Link></h4> */}
            {/* <h4><Link to="/dashboard">Dashboard</Link></h4> */}
        </div> 
    )
}

export default Header;