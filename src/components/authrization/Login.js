import { useEffect, useState } from "react"
import { useNavigate, Link } from 'react-router-dom'
import { actions } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Container, TextField } from '@mui/material'
const Login = () => {
    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authState = useSelector(state => state)
    useEffect(() => {
        if (authState.user) {
            navigate('/');
        }
    }, [])

    const validate = (e) => {
        if (e.key == 'Enter') {
            if ((username == 'shiv') && (pass == '1234')) {
                const credential = { username: 'shiv', password: '1234' }
                localStorage.setItem('credential', JSON.stringify(credential))
                dispatch(actions.authentication(credential))
                navigate('/');
            }
        }
    }
    return <Container >
        <Box sx={{display:'inline-block'}}>
            <TextField id="outlined-basic" label="username, mobile no, email" placeholder="username, mobile no, email" variant="outlined" />
            <TextField id="outlined-basic" label="username, mobile no, email" placeholder="username, mobile no, email" variant="outlined" />
        </Box>
    </Container>
    // return <div className="login-main" style={{ backgroundColor: "blueviolet" }}>
    //     <input className="login-field" type="text" placeholder="username, mobile no, email" onChange={(e) => setUsername(e.target.value)} /><br />
    //     <input className="login-field" type="text" placeholder="passsword" onChange={(e) => setPass(e.target.value)} onKeyPress={(e) => validate(e)} /><br />
    //     <Link to="/"> Forgot Passowrd </Link>
    //     <button onClick={(e) => validate(e)}>Login</button>
    //     <div style={{}}>
    //         <input type="text" placeholder="username, mobile no, email"/><br/>
    //         <button>Send</button>
    //     </div>
    // </div>
}
export default Login