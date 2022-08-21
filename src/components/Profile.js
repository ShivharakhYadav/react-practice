import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../store/actions';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authState = useSelector(state => state)
    useEffect(() => {
        if (!authState.user) {
            navigate('/')
        }
    }, [])
    const logout = () => {
        localStorage.clear();
        dispatch(actions.authentication())
        navigate('/')
    }
    return <div>
        <div>
            <button onClick={() => logout()}>Logout</button>
        </div>
    </div>
}
export default Profile; 