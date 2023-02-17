import React, { useState } from "react";
import{Box,TextField,Typography,Button,Grid} from "@mui/material";
import "../UserAuthentication/Authentication.css";
import { Link } from "react-router-dom";
import Loginimg from "../../images/loicon.png"


 
const LoginPage = () =>{
     const [formData,setFormData]=useState({
        username:"",
        password:"",

    });

    const [errors,setErrors ]=useState({
        username:"",
        password:"",

    })
      const handleChange =(event) =>{
        setFormData({...formData,[event.target.name]:event.target.value});
      };

      const validate = () => {
        let usernameError = "";
        let passwordError = "";
    
        if (!formData.username) {
          usernameError = "You should to input Username ";
        }
    
        if (!formData.password) {
          passwordError = "You should input Password ";
        }
    
        if (usernameError || passwordError) {
          setErrors({ username: usernameError, password: passwordError });
          return false;
        }
    
        return true;
      };


      const handleSubmit =(event)=>{
        event.preventDefault();
        const isValid= validate();
        if (isValid){
            console.log(formData);
            setFormData({
                username:"",
                password:"",
            })
        }
      };
    
    return( 
    <div>
          <Grid container spacing={0.2}>
        <Grid item sm={7} >
          <Typography
            variant="h3"
            marginTop={30}
            marginLeft={{ md: 5, lg: 7, xl: 10 }}
            padding={5}
            textAlign="left"
            fontSize="70px"
            fontFamily="Abril Fatface"
            sx={{
              color: "#FF7300",
            }}
          >
            <b> Welcome to edulab pro </b>
          </Typography>
        </Grid>
        
          <Grid item sm ={5}>
          <form onSubmit={handleSubmit}>
            <Box            
            display = "flex" 
            flexDirection = {"column"} 
            maxWidth="fit content"
            alignItems ="center" 
            justifyContent={"center"}
            margin={15}
            marginTop={10}
            padding={5}
            borderRadius={5}
       
            sx={{
              background:
                " radial-gradient(circle,#b25000,#FF7300,#ff8f33,#FF7300)",
            }}
            
           >    <img src={Loginimg} width="140px" />
                <Typography 
                  color="FF7300"
                  variant="h6"
                  padding={1}
                  textAlign="center"
                  
                >
                    <b>LOGIN</b>
                </Typography>

                
                    <TextField
                       size ="small"
                       sx={{
                        "& fieldset": { border: "none" },
      
                        input: {
                          color: "#8C8B8B",
                          bgcolor: "#fff",
                          borderRadius: "20px",
                          width: "300px",
                        },
                        
                      }}
                       onChange={handleChange}
                       value={formData.username}
                       name="username"
                       margin ="normal" 
                       type={"text"}
                       variant="outlined" 
                       placeholder="Userame"
                       error={!!errors.username}
                       helperText={errors.username}
                     />
                  
                <TextField 
                  sx={{
                    "& fieldset": { border: "none" },
  
                    input: {
                      color: "#8C8B8B",
                      bgcolor: "#fff",
                      borderRadius: "20px",
                      width: "300px",
                    },
                  }}
                      
                      onChange={handleChange}
                      name="password"
                      value={formData.email}
                      margin= "normal" 
                      type={"password"} 
                      variant="outlined" 
                      placeholder="Password"
                      size="small"
                      error={!!errors.password}
                      helperText={errors.password}
                />

             <Typography
                variant="body2"
                alignSelf="flex-end"
                color="blue"   
              >
               <Link to ={"/ForgotPassword"}>
                <i>Forgot password</i>
                </Link>
              </Typography>


                <Button 
                style={{maxWidth: '190px', maxHeight: '190px', minWidth: '190px', minHeight: '30px'}}
                sx={{
                    marginTop: 3,
                    borderRadius: 3,
                    bgcolor: "#fafafa",
                    fontFamily: "Abril Fatface",
                    color: "black",
                  }}
                type ="submit" 
                variant ="contained" 
                
                >
                   <b>Login</b>
                </Button>

                <Typography
               
                variant="h6"
                padding={2}
                textAlign="center"
                fontFamily="Abril Fatface"
                
              >
                 New to EduLab Pro ? {" "}
                 <Link to={"/Signup"}>
                 <i> Create New Account</i>
                 </Link>
                 
            </Typography>

                
            </Box>
         
        </form>
        </Grid>
        </Grid>
    </div>
    );
};

export default LoginPage;