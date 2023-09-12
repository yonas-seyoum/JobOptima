import React from "react"
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../../styles/socials.css"

export default function Socials() {
    return (
        <div id="social-holder">
            <GoogleIcon sx={{color:"rgb(234, 67, 53)", fontSize:20}}  />
            <FacebookIcon sx={{color:"rgb(59, 89, 152)", fontSize:20}} />
            <TwitterIcon sx={{color:"rgb(29, 161, 242);", fontSize:20}}/>
            <GitHubIcon sx={{color:"white", fontSize:20}}/>
        </div>
    )
}