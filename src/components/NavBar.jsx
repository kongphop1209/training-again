
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
                    <a href="#"><FontAwesomeIcon icon={faCartShopping} className='shopping-cart-style me-5' /></a>
                    <a className='user-account-name' href="#">
                        <a href="#"><FontAwesomeIcon className='user-profile-style' icon={faUser}/></a>
                        <a className='account-name-show me-4'>Account</a>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NavBar