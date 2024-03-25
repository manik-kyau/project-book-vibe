import banner from '../../assets/images/banner.png';
const Banner = () => {
    return (
        <div>
            <div className="h-[500px] hero bg-base-200 my-12 rounded-3xl px-[120px]">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-5xl font-bold leading-[70px]">Books to freshen up your bookshelf</h1>
                  <button className="btn text-xl font-bold text-white bg-[#23BE0A] hover:bg-[#23BE0A] mt-12">View The List</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Banner;