import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const NavBar = () => {
    const state = useSelector(state => state)
    return <div>
        {/* <nav>
            <Link to='/'>Home</Link><br />
            {!state.user && <><Link to='/login'>Login</Link><br /></>}
            {state.user && <Link to='/profile'>Profile</Link>}
        </nav> */}
    </div>
}
export default NavBar