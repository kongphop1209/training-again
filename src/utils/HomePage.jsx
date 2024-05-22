
import NavBar from '../components/NavBar'
import Wrapper1 from '../assets/wrapper-1.png'


function HomePage() {
    return (
        
        <div>
            <NavBar/>
            <div className='wrapper1'>
                <div>
                    <img className='container mt-3 ms-3 w-100 h-100' src={Wrapper1}/>
                </div>
            </div>
        </div>
    )
}

export default HomePage