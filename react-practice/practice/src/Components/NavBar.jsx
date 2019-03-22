import React from 'react'
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/Toolbar"
import TypoGraphy from "@material-ui/core/Typography"


const NavBar = (props) => {
    let title = props.title  ? props.title : "Material";
    let position = props.position  ? props.position : "static"
    let color = props.color  ? props.color : "inherit"
    return(<AppBar position={position}>
        <ToolBar>
        <TypoGraphy variant="title" color={color}>
        {title}
        </TypoGraphy>
            </ToolBar>
       </AppBar>)
}

export default NavBar;