import bmw_car from '../assets/bmw-i7.jpg'

const Home = () => {
    return ( 
        <div className='min-h-screen'>
            <div>
                <h1></h1>
                <p></p>
            </div>
            <div>
                <img src={bmw_car} alt="" className='h-screen w-screen' />
            </div>
        </div>
     );
}
 
export default Home;