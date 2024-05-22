
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../assets/logo_giant.png'
import SearchingBar from './SearchingBar'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return (
        <div>
            <div className='nav-bar-con'>
                <div >
                    <a href="/"><img className='container mt-3 ms-3 w-75' src={Logo} /></a>
                </div>
                <SearchingBar />
                <div className='nav-bar-user mt-4 me-5 ms-3'>
                    <a href="#"><FontAwesomeIcon icon={faCartShopping} /><a className='me-4'>Shopping</a></a>
                    <a href="#"><FontAwesomeIcon icon={faUser} /><a className=''>Account</a></a>
                </div>
            </div>
        </div>
    )
}

export default NavBar