
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../assets/logo_giant.png'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return (
        <div>
            <a className='nav-bar-con'>
                <div >
                    <a href="/"><img className='container mt-3 ms-3 w-75' src={Logo} /></a>
                </div>
                <div>
                    <a>
                        <a>Searching anything</a>
                        <a>Searching anything</a>
                    </a>
                    <a><FontAwesomeIcon icon={faSearch}/></a>
                </div>
                <a>
                    <a>Shopping</a>
                    <a>Account</a>
                </a>
            </a>
        </div>
    )
}

export default NavBar