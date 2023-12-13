// import "../../../../node_modules/slick-carousel/slick/slick.css"; 
// import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import {Box,Typography,Card} from '@mui/material';
// import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  customSlider: {
    "& .slick-dots": {
     position: "absolute",
     top:'10px',
     left: '-100px',
        
    },
    "& .slick-next": {
      position: "absolute",
      right: '25px',
      top: '25px',   
     },
     "& .slick-prev": {
      position: "absolute",
      top: '25px',
      zIndex:'6',
      left:'209px'
         
     },
     "& .slick-dots li button:before": {
       opacity: 0.9,
       color: '#777',
     },
      "& .slick-dots li.slick-active button:before": {
       
       color: '#ffffff',
     },
}


})

function  SimpleSlider() {
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000
    }
    const slick_slider = {
    
      width:'100%',
      borderRadius:'15px',
      height:'258px'
    }
   
const classes = useStyles();
   
    return (
      <div >


        
       <Card sx={{borderRadius:'15px', height:'258px'}}>
       
       <Slider {...settings} className={classes.customSlider}>
       <Box sx={{backgroundColor:'black',borderRadius:'15px',}}>
       <Box sx={{opacity:'0.5'}}>
       <img  style={slick_slider} src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract01.jpg" />
       
       </Box>
       <Box sx={{position:'absolute', bottom:'0',padding:'20px',color:'white'}}>

       <Typography sx={{fontSize:'13px'}}>
         FEATURED APP
       </Typography>
       <Typography sx={{fontSize:'32px'}}>
        Hello India
       </Typography>
       <Typography sx={{fontSize:'15px'}}>
       India is a beautiful country
       </Typography>
       </Box>
       </Box>
       

       <Box sx={{backgroundColor:'black', borderRadius:'15px',}}>
       <Box sx={{opacity:'0.5'}}>
       <img  style={slick_slider} src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract02.jpg" />
       </Box>
       <Box sx={{position:'absolute', bottom:'0',padding:'20px',color:'white'}}>

       <Typography sx={{fontSize:'13px'}}>
         FEATURED APP
       </Typography>
       <Typography sx={{fontSize:'32px'}}>
        Hello India
       </Typography>
       <Typography sx={{fontSize:'15px'}}>
       India is a beautiful country
       </Typography>
       </Box>
       </Box>

       <Box sx={{backgroundColor:'black', borderRadius:'15px',}}>
       <Box sx={{opacity:'0.5'}}>
       <img  style={slick_slider} src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg" />
       </Box>
       <Box sx={{position:'absolute', bottom:'0',padding:'20px',color:'white'}}>

       <Typography sx={{fontSize:'13px'}}>
         FEATURED APP
       </Typography>
       <Typography sx={{fontSize:'32px'}}>
        Hello India
       </Typography>
       <Typography sx={{fontSize:'15px'}}>
       India is a beautiful country
       </Typography>
       </Box>
       </Box>             
       </Slider>
      
       
       </Card>
       


       
      </div>
    );
  }

  export default SimpleSlider;