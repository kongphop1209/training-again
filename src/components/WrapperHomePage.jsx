import { faAppleWhole } from "@fortawesome/free-solid-svg-icons/faAppleWhole"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../App.css'
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"



function WrapperHomePage() {
  return (
    <div>
      <div className="wrapper-home-page mx-auto my-4">
        <div className="ms-5">
          <div className="Row-1 ms-2 mt-3">
            <a ><FontAwesomeIcon className="mt-1 ms-5" icon={faAppleWhole} style={{ color: 'white', fontSize: '3vw' }} /></a>
            <a className="ms-3" style={{ fontSize: '1.5vw' }}>iPhone 16 Series</a>
          </div>
          <div className="ms-2">
            <h1 className="mt-1 ms-5" style={{ color: 'white', fontSize: '4vw' }}>Up to 10%</h1>
            <h1 className="ms-5" style={{ color: 'white', fontSize: '4vw' }}>off Voucher</h1>
          </div>
          <div className="ms-2 mb-3">
            <a className="ms-5" href='#' style={{ color: 'white', fontSize: '1.3vw' }}>Shop Now</a>
            <a className="ms-1"><FontAwesomeIcon icon={faAngleRight} style={{ color: 'white', fontSize: '1.2vw' }} /></a>
          </div>
        </div>
      </div>
      
    </div>

  )
}

export default WrapperHomePage