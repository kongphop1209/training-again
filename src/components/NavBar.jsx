
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../assets/logo_giant.png'
import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return (
        <div>
            <a className='nav-bar-con'>
                <div >
                    <a href="/"><img className='container mt-3 ms-3 w-75' src={Logo} /></a>
                </div>
                <div className='searching-bar pt-3 pb-3 w-50'>
                    <a>
                        <a className='all-cate me-3 ms-4'>
                            <a href='#' className='me-2 ms-'>All categories</a>
                            <FontAwesomeIcon style={{color:'black'}} icon={faAngleDown}/>
                        </a>
                        <input className="search-input" type="text" placeholder="Search Anything" />
                    </a>
                    <a className='me-3' ><FontAwesomeIcon icon={faSearch}/></a>
                </div>
                <a>
                    <a>Shopping</a>
                    <a className='me-3'>Account</a>
                </a>
            </a>
        </div>
    )
}

export default NavBar