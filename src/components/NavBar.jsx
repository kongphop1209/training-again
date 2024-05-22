
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../assets/logo_giant.png'
import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return (
        <div>
            <div className='nav-bar-con'>
                <div >
                    <a href="/"><img className='container mt-3 ms-3 w-75' src={Logo} /></a>
                </div>
                <div className='searching-bar pt-3 pb-3 mt-4 w-75'>
                    <a>
                        <a className='all-cate me-3 ms-4'>
                        <a href='#' className='me-2 ms-2'><span>All categories</span></a>
                        <FontAwesomeIcon style={{color:'black'}} icon={faAngleDown}/>
                    </a>
                    <input className="search-input" type="text" placeholder="Search anything" />
                    </a>
                    
                    <a className='search-icon me-3' ><FontAwesomeIcon style={{color:'black'}} icon={faSearch}/></a>
                </div>
                <div className='nav-bar-user mt-4 me-4 ms-3'>
                    <a className='me-4'>Shopping</a>
                    <a className=''>Account</a>
                </div>
            </div>
        </div>
    )
}

export default NavBar