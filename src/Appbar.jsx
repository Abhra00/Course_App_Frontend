import Typography from '@mui/material/Typography'
import Button from "@mui/material/Button"

function Appbar() {
    return <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4

    }}
    >
        <div>
            <Typography>Udemy</Typography>
        </div>

        <div style={{
            display: "flex"
        }}>
            <div style={{ marginRight: 10 }}>
                <Button variant='contained'
                    onClick={() => {
                        window.location = "/signup"
                    }}
                >
                    Sign Up
                </Button>
            </div>


            <div>
                <Button variant='contained'
                    onClick={() => {
                        window.location = "/signin"
                    }}>
                    Sign In
                </Button>
            </div>
        </div>
    </div>
}
export default Appbar;