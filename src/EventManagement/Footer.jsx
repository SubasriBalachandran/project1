import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box ,Link} from '@mui/material';

function Footer() {
  return (
    <div className='ft'>
      <footer >
        
        <Box className="main">
        <Link>eventshub@gmail.com</Link>
        <div className='call'>
        <CallIcon ></CallIcon>+916739378903&emsp;</div>
        </Box>
        <h3><center>Follow us on:</center></h3>
        <Box className="name"> 
        <FacebookIcon></FacebookIcon>&emsp;
        <InstagramIcon></InstagramIcon>&emsp;
        <YouTubeIcon></YouTubeIcon>&emsp;
        <TwitterIcon></TwitterIcon>&emsp;

        </Box>
        <Box className="bottom">
          <CopyrightIcon style={{paddingBottom:"0px"}}/> 2023, EventsHub Corporation Pvt. Ltd. All Rights Reserved.&emsp;
        </Box>
      </footer>
    </div>
  )
}

export default Footer