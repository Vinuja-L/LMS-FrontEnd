import { TextField,Box,Button, Typography, Grid } from "@mui/material";
import React from "react";
import "../UserAuthentication/Authentication.css";
import { Link } from "react-router-dom";



const forgotpsword = ()  => {
   
    return(
        <div>
            
            <form>
                
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

                     
                            
                    <Typography color="#E8E1FA" variant="h5" padding={4}
                     textAlign='center' fontFamily="Abril Fatface">Forgot Password
                     </Typography>
                       
                   
                    <Grid container direction="column" padding="30px" 
                    marginTop={0.2} marginBottom={4}
                    >

                    <Typography color="#E8E1FA" variant="h6" padding={0.2} 
                    textAlign='center' fontFamily="Abril Fatface"
                    >Enter E-mail Address
                    </Typography>

                    <TextField sx={{input : {color:'#8C8B8B' ,
                     bgcolor:'#fff',borderRadius:'20px',height:'15px'}}} 
                      margin="normal" type={'email'} variant="outlined" 
                      placeholder="E-mail Address" />
                                  
 </Grid>
    </Grid>
    <Grid pb={1}>
            <Button 
             sx={{marginTop:3, borderRadius:4 ,
             fontFamily:"Abril Fatface",color:
             "black",bgcolor:"#fafafa"
            }}  
             variant="contained" 
             color="warning"
             component={Link}
             to ={"/Verification"}
             
             >
                <b>SEND</b>
                </Button>
            
    </Grid>

     </Box>
     </form>
    </div>
    )
}


export default forgotpsword;