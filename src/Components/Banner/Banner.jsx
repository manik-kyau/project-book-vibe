import { Link } from 'react-router-dom';
import banner from '../../assets/images/banner.png';
const Banner = () => {
    return (
        <div>
            <div className=" hero bg-[#F3F3F3] my-12 rounded-3xl lg:px-[120px] py-8 lg:py-12">
              <div className="hero-content flex-col lg:flex-row-reverse gap-12 lg:gap-6">
                <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-4xl lg:text-5xl flex font-bold leading-[50px] lg:leading-[70px] playfair text-[#131313] text-center lg:text-start">Books to freshen up your bookshelf</h1>
                  <div className='text-center lg:text-start'>
                    <Link to='/listedbooks'>
                        <button className="btn text-lg lg:text-xl font-bold text-white bg-[#23BE0A] hover:bg-[#23BE0A] mt-5 lg:mt-10 WorkSans">View The List</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Banner;