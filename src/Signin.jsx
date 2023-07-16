import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

function Signin() {
    return <div>
        <div>
        <div style={{
            paddingTop : 150,
            marginBottom : 10,
            display: "flex",
            justifyContent: "center"
        }}>
            <Typography>
            Welcome back to Udemy
            Sign in below
            </Typography>
        </div>
        </div>
        <div style={{ display:"flex", justifyContent :"center"}}>
        <Card  style={{width : 400, padding : 20}}>
        <TextField fullWidth id="filled-basic" label="Username" variant="filled" />
        <br /> <br />
        <TextField fullWidth id="filled-basic" label="Password" variant="filled" />
        <br /> <br />
        <Button variant="contained">SIGN IN</Button>
        </Card>
        </div>
    </div>
}

export default Signin;