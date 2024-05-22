
import NavBar from '../components/NavBar'
import Wrapper1 from '../assets/wrapper-1.png'

function HomePage() {
    return (
        <div>
            <NavBar/>
            <div className='wrapper1'>
                <div>
                    <img src={Wrapper1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomePage