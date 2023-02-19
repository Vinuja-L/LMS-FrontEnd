import React,{useState} from "react";
import {Grid,TextField,Box,Button, Typography,} from "@mui/material"
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from "react-router-dom";
import "../UserAuthentication/Authentication.css";


const Signup = () =>{
    const [signdata,setSigndata]= React.useState({
        Firstname:"",
        Lastname:"",
        Email:"",
        Username:"",
        Password:"",
        Userrole:"",

    });

    const handleChange =(event) =>{
      setSigndata({...signdata,[event.target.name]:event.target.value});
    }

     const handleSubmit =(event)=>{
        event.preventDefault();
            console.log(signdata);
            setSigndata({
                Firstname:"",
                Lastname:"",
                Email:"",
                Username:"",
                Password:"",
                Userrole:"",
            })
      };
    
    return(
      <div>
            
      <form form onSubmit={handleSubmit}>
          
          <Box 
          display="flex" 
          flexDirection={"column"}
          maxWidth={500} 
          alignItems="center" 
          justifyContent={'center'}
          margin="auto"
          marginTop={5}
          padding={5}
          borderRadius={10}
          boxShadow={'5px 5px 10px #ccc'}
          bgcolor="#27144B"

          sx={{
              background:' radial-gradient(circle,#b25000,#FF7300,#ff8f33,#FF7300)',
      }}
          >
            <Grid container direction="column">

              <Grid container direction="column">
              <Typography color="#E8E1FA" variant="h4" padding={2} 
              textAlign='center' fontFamily="Abril Fatface">
                Create New Account</Typography>

              <Typography color="#E8E1FA" variant="h7" padding={0.2} 
              textAlign='center' fontFamily="Abril Fatface">
                Already have an Account? <Link href="#"> Login</Link></Typography>
                  </Grid>
             

              <Grid container spacing={2}>
                  <Grid item sm={6}>
                 <TextField sx={{input : {color:'#8C8B8B',bgcolor:'#fff', 
                borderRadius:'10px',width:'200px',height:'15px'} }} 
                onChange={handleChange}
                margin="normal" type={'text'}  variant="outlined"
                placeholder="First Name"
                
                />

                  </Grid>
                  <Grid item sm={6}>
                  <TextField sx={{input : {color:'#8C8B8B' , bgcolor:'#fff',
                  borderRadius:'20px',width:'200px',height:'15px'}}}
                  margin="normal" type={'text'} variant="outlined"
                  onChange={handleChange}
                  placeholder="Last Name" />

                  </Grid>
              </Grid>

              <Grid container direction="column">
                  <TextField 
                  sx={{input : {color:'#8C8B8B' , bgcolor:'#fff',
                  borderRadius:'20px',height:'15px'}}}
                  margin="normal" type={'email'} variant="outlined"
                  onChange={handleChange}
                  placeholder="E-mail Address" />

              <TextField
               sx={{input : {color:'#8C8B8B' , bgcolor:'#fff',
               borderRadius:'20px',height:'15px'}}} 
               margin="normal" type={'text'} variant="outlined" 
               placeholder="User Name" />
              <TextField sx={{input : {color:'#8C8B8B' , 
              bgcolor:'#fff',borderRadius:'20px',height:'15px'}}} 
              margin="normal" type={'password'} variant="outlined"
              onChange={handleChange}
               placeholder="Password" />

              
                  <Grid container spacing={0.2} padding="10px">
                      <Grid item>
                       <Typography color="#E8E1FA" variant="h7"
                        padding={0.2} fontFamily="Abril Fatface" >
                          Guest Role:</Typography>
                      </Grid>
                      <Grid item>
<FormControl sx={{ m: 0.05, minWidth: 120,bgcolor:"#fff" ,borderRadius:"5px"}}>
  
  <Select  onChange={handleChange}
    displayEmpty
    inputProps={{ 'aria-label': 'Without label' }}
  >
    <MenuItem value='10'>
      <em>-Select-</em>
    </MenuItem>
    <MenuItem value={10}>Teacher</MenuItem>
    <MenuItem value={20}>Student</MenuItem>
  
  </Select>
  
</FormControl>
</Grid>

</Grid>
</Grid>
</Grid>
<Button 
 LinkComponent={Link} to {...'/signup'}
sx={{marginTop:3, borderRadius:4,
bgcolor:"#fafafa",color:"black",
fontFamily:"Abril Fatface"}}
type ="submit" 
variant="contained" color="warning">
<b>SIGN UP</b></Button>

</Box>
</form>
</div>
)
}

export  default Signup;