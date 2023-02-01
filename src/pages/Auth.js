import React, { useState } from "react";
import{Box,TextField,Typography,Button,} from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";

 
const Auth = () =>{
    const [isSignup,setisSignup]=useState(false);
    const [inputs,setInputs]=useState({
        name:"",
        email:"",
        password:"",

    });
      const handleChange =(e) =>{
        setInputs((prevState) =>({
            ...prevState,
            [e.target.name] :e.target.value

        }));
      };

      const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(inputs);

      };

      const resetState = () =>{
        setisSignup(!isSignup);
        setInputs({name:"",email:"",password:""});
      }
    
    return( 
    <div>
        <form onSubmit={handleSubmit}>
            <Box 
            display = "flex" 
            flexDirection = {"column"} 
            maxWidth={300} 
            alignItems ="center" 
            justifyContent={"center"}
            margin="auto"
            marginTop={10}
            padding={3}
            borderRadius={5}
            boxShadow={"5px 5px 10px #ccc"}
            sx={{
                ":hover":{
                    boxShadow:"10px  10px 20px #ccc",

                },
            }}
            >
                <Typography variant="h2" padding = {2} textAlign= "center">
                    {isSignup ? "Signup" :"Login"}
                </Typography>

                {isSignup && (
                    <TextField
                       onChange={handleChange}
                       value={inputs.name}
                       name="name"
                       margin ="normal" 
                       type={"text"}
                       variant="outlined" 
                       placeholder="Name"
                     />
                  )}

                <TextField 
                      
                      onChange={handleChange}
                      name="email"
                      value={inputs.email}
                      margin= "normal" 
                      type={"email"} 
                      variant="outlined" 
                      placeholder="Email"
                />

                <TextField 

                onChange={handleChange}
                value={inputs.password}
                name="password"
                margin= "normal" 
                type={"password"}
                variant="outlined" 
                placeholder="Password"/>
                
                <Button 
                style={{maxWidth: '190px', maxHeight: '190px', minWidth: '190px', minHeight: '30px'}}
                endIcon={
                    isSignup ? <HowToRegOutlinedIcon/> : <LoginOutlinedIcon/>
                }
                type ="submit" 
                sx ={{margin:2,borderRadius:1}}
                variant ="contained" 
                color="warning"
                >
                    {isSignup ? "Signup" :"Login"}
                </Button>

                <Button 
                
                endIcon={
                    isSignup ? <LoginOutlinedIcon/> : <HowToRegOutlinedIcon/>
                }
                onClick={resetState}
                sx ={{margin:2,borderRadius:1}}
                color="warning"
                variant ="contained"
            
                >
                 Change TO  {isSignup ? "Login" : "Signup" }
                </Button>
            
            
            </Box>

        </form>
    </div>
    );
};

export default Auth;