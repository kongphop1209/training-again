import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SearchingBar() {
  return (
    <div className='searching-bar pt-3 pb-3 mt-4 w-75'>
                    <a className='searching-row'>
                        <a className='all-cate me-3 ms-4'>
                            <a>All categories</a>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </a>
                        <input className="search-input" type="text" placeholder="Search anything" />
                    </a>
                    <a className='search-icon me-3' ><FontAwesomeIcon style={{ color: 'black' }} icon={faSearch} /></a>
                </div>
  )
}

export default SearchingBar