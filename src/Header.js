import React from 'react'
import "./Header.css"
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton"
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className = "header">
            {/* <h2>I am a header</h2> */}
            {/* Wrapping IconButton makes personIcon a button*/}
                <IconButton>
                    <PersonIcon fontSize = "large" className= "header_icon" />
                </IconButton>
             <img
                className = "header_logo"
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/338_Tinder_logo-512.png" 
                alt= "tinder logo"
            />
            <IconButton>
                <ForumIcon fontSize = "large" className = "header_icon"/>
            </IconButton>

        </div>
    )
}

export default Header
