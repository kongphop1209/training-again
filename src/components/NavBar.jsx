
import Logo from '../assets/logo_giant.png'

function NavBar() {
    return (
        <div>
            <a className='nav-bar-con'>
                <div>
                    <a href="/"><img src={Logo} /></a>
                </div>
                <a>Searching anything</a>
                <a>
                    <a>Shopping</a>
                    <a>Account</a>
                </a>
            </a>
        </div>
    )
}

export default NavBar