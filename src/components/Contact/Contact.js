import React,{useEffect, useState}  from 'react'
import './Contact.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { Paper,Button,Card,TextField, InputAdornment  } from '@mui/material';
import { Box } from '@mui/system';
import { AccountCircle } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import ChatIcon from '@mui/icons-material/Chat';


export default function Contact() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const users=[
    {
      "name":"sanjeeev",
      "email":'sanjeevmanagutti@gmail.com',
      "phoneno":'9663111463',
      "message":'hi i want to connect with u'
    }
  ]
 
const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [phoneno,setPhoneno]=useState('');
const [message,setMessage]=useState('')

const adduser=() => {
  const newUser={
    id: `010${users.length+1}`,
    name,
    email,
    phoneno,
    message,
  }
  fetch("https://6216dcb171e7672e536d1003.mockapi.io/users",{
    method:"POST",
    body: JSON.stringify(newUser),
    headers:{"Content-Type": "application/json"},
  })
  .then((data)=>data.json())
  .then((user)=>console.log(user));
}

  return (
    <Paper className="contact" id="contact" elevation={20} sx={{borderRadius:"0.5px"}}>  
  <h2 className="heading"><i className="fas fa-headset"></i> Get in <span>Touch</span></h2>

  <Card className="container">
    <div data-aos="zoom-in-up" className="content">
      <div data-aos="fade-right" className="image-box">
        <img draggable="false" src="https://github.com/jigar-sable/Portfolio-Website/blob/main/assets/images/contact1.png?raw=true" alt=""/>
      </div>
    <Box id="contact-form">
      
      <div data-aos="fade-left" className="form-group">
          <TextField 
           sx={{
            width: 500,
            maxWidth: '100%',
          }} 
              label="Name"
              placeholder='Enter  Name'
              name="name"
              id="name"
              value={name}
              variant="outlined"
              color="secondary"
              onChange={(event) => setName(event.target.value)}
              margin='normal'
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),}}/>
        </div>
        <div data-aos="fade-left" className="form-group">
          <TextField  
          sx={{
            width: 500,
            maxWidth: '100%',
          }} 
              label="Email"
              placeholder='Enter Email'
              id="email"
              value={email}
              variant="outlined"
              color="secondary"
              onChange={(event) => setEmail(event.target.value)}
              margin='normal'
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),}}/>
        </div>
        <div data-aos="fade-left" className="form-group">
          <TextField  
          sx={{
            width: 500,
            maxWidth: '100%',
          }} 
              label="Phone"
              placeholder='Enter Phone No'
              name="Phone"
              id="Phone"
              value={phoneno}
              variant="outlined"
              color="secondary"
              onChange={(event) => setPhoneno(event.target.value)}
              margin='normal'
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneForwardedIcon  />
                  </InputAdornment>
                ),}}/>
        </div>
        <div data-aos="fade-left" className="form-group">
          <TextField 
          sx={{
            width: 500,
            maxWidth: '100%',
          }}  
              label="Message"
              placeholder='Enter Message'
              name="message"
              id="message"
              value={message}
              variant="outlined"
              color="secondary"
              onChange={(event) => setMessage(event.target.value)}
              margin='normal'
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ChatIcon />
                  </InputAdornment>
                ),}}/>
        </div>
      <div data-aos="fade-left" className="button-area">
        <Button 
        type="submit"
        onClick={adduser}
          >
          Submit <i className="fa fa-paper-plane"></i></Button>
      </div>
    </Box>
  </div>
  </Card>
</Paper>
  )
}
