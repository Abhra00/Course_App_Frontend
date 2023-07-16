import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { stepLabelClasses } from '@mui/material';

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return <div>
        <div>
        <div style={{
            paddingTop : 150,
            marginBottom : 10,
            display: "flex",
            justifyContent: "center"
        }}>
            <Typography>
            Welcome to Udemy
            Sign up below
            </Typography>
        </div>
        </div>
        <div style={{ display:"flex", justifyContent :"center"}}>
        <Card  style={{width : 400, padding : 20}}>
        <TextField 
        fullWidth   
        label="Username" 
        variant="filled"
        onChange={(e) => {
            setEmail(e.target.value)
        }}
        />
        <br /> <br />
        <TextField 
        fullWidth  
        label="Password" 
        variant="filled" 
        onChange={(e) => {
            setPassword(e.target.value)
        }}
        />
        <br /> <br />
        <Button variant="contained"
        onClick={() => {
            fetch("http://localhost:3000/admin/signup", {
                method : "POST",
                body : JSON.stringify({
                    username : email,
                    password : password
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                return res.json().then((data) => {
                    localStorage.setItem("token", data.token);
                })
            })
        }}>SIGN UP</Button>
        </Card>
        </div>
    </div>
}

export default Signup;