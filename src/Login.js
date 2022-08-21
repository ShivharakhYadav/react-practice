import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { actions } from './store/actions'
import { useDispatch, useSelector } from 'react-redux'
import store from './store/store'
const Login = () => {
    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")
    const [err, setErr] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authState = useSelector(state => state)
    const st = store.getState();
    useEffect(() => {
        console.log("authState.user", authState.user)
        // const localStore = JSON.parse(localStorage.getItem('credential'));
        // if(localStore)
        // {
        //     navigate('/')
        // }
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
            else {
                setErr('wrong Pass')
            }
        }
    }
    return <div>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <input type="text" onChange={(e) => setPass(e.target.value)} onKeyPress={(e) => validate(e)} />
        <span>{err}</span>
        <button onClick={(e) => validate(e)}>Submit</button>
    </div>
}
export default Login