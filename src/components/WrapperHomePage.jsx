import { faAppleWhole } from "@fortawesome/free-solid-svg-icons/faAppleWhole"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../App.css'
import { faAngleRight} from "@fortawesome/free-solid-svg-icons"



function WrapperHomePage() {
  return (
    <div className="wrapper-home-page mx-auto my-4">
      <div>
        <div className="Row-1 ms-2">
          <FontAwesomeIcon className="mt-5 ms-5" icon={faAppleWhole} style={{color:'white' ,fontSize:'3vw'}}/>
          <a className="mt-5 ms-3" style={{fontSize:'1.5vw'}}>iPhone 16 Series</a>
        </div>
        <div className="ms-2" style={{color:'white'}}>
          <h1 className="mt-3 ms-5">Up to 10%</h1>
          <h1 className="ms-5">off Voucher</h1>
        </div>
        <div className="ms-3">
            <a className="ms-5" href='#' style={{textDecoration:'White',color:'white'}}>Shop Now</a>
            <a className="ms-2"><FontAwesomeIcon icon={faAngleRight} style={{color:'white'}}/></a>
        </div>
        
      </div>
      
    </div>
  )
}

export default WrapperHomePage