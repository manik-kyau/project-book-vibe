import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="mt-10">
            <div className="navbar bg-base-100 px-0">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="lg:hidden mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li className="text-lg font-normal"><NavLink to='/'>Home</NavLink></li>
                    <li className="text-lg font-normal"><NavLink to='/listedbooks'>Listed Books</NavLink></li>

                    <li  className="text-lg font-normal hover:bg-[#23BE0A] rounded-lg hover:text-white">
                    <NavLink 
                    to='/faq'
                    >FAQ</NavLink></li>

                    <li  className="text-lg font-normal hover:bg-[#23BE0A] rounded-lg hover:text-white">
                    <NavLink 
                    to='/contact-us'
                    >Contact Us</NavLink></li>

                    <li className="text-lg font-normal"><NavLink to='/pagestoread'>Pages to Read</NavLink></li>
                  </ul>
                </div>
                <a className="text-3xl font-bold text-[#23BE0A] WorkSans">Book Vibe</a>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-3">
                  <li  className="text-lg font-normal hover:bg-[#23BE0A] rounded-lg hover:text-white">
                    <NavLink 
                    to='/'
                    className={({ isActive}) => isActive ? "text-[#23BE0A] font-bold text-lg border-2 border-[#23BE0A] bg-white WorkSans hover:text-white" : "text-lg font-bold WorkSans text-[#131313cc] hover:text-white" }
                    >Home</NavLink></li>
                  <li  className="text-lg font-normal hover:bg-[#23BE0A] rounded-lg hover:text-white">
                    <NavLink 
                    to='/listedbooks'
                    className={({ isActive}) => isActive ? "text-[#23BE0A] font-bold text-lg border-2 border-[#23BE0A] bg-white WorkSans hover:text-white" : "text-lg font-bold WorkSans text-[#131313cc] hover:text-white" }
                    >Listed Books</NavLink></li>

                  <li  className="text-lg font-normal hover:bg-[#23BE0A] rounded-lg hover:text-white">
                    <NavLink 
                    to='/faq'
                    className={({ isActive}) => isActive ? "text-[#23BE0A] font-bold text-lg border-2 border-[#23BE0A] bg-white WorkSans hover:text-white" : "text-lg font-bold  WorkSans text-[#131313cc] hover:text-white" }
                    >FAQ</NavLink></li>

                  <li  className="text-lg font-normal hover:bg-[#23BE0A] rounded-lg hover:text-white">
                    <NavLink 
                    to='/contact-us'
                    className={({ isActive}) => isActive ? "text-[#23BE0A] font-bold text-lg border-2 border-[#23BE0A] bg-white WorkSans hover:text-white" : "text-lg font-bold  WorkSans text-[#131313cc] hover:text-white" }
                    >Contact Us</NavLink></li>

                    <li  className="text-lg font-normal hover:bg-[#23BE0A] rounded-lg hover:text-white">
                    <NavLink 
                    to='/pagestoread'
                    className={({ isActive}) => isActive ? "text-[#23BE0A] font-bold text-lg border-2 border-[#23BE0A] bg-white WorkSans hover:text-white" : "text-lg font-bold  WorkSans text-[#131313cc] hover:text-white" }
                    >Pages to Read</NavLink></li>
                </ul>
              </div>
              <div className="navbar-end space-x-4">
                <button className="btn text-base lg:text-lg font-semibold text-white bg-[#23BE0A] hover:bg-[#23BE0A] WorkSans">Sign In</button>
                <button className="btn text-base lg:text-lg font-semibold text-white bg-[#59C6D2] hover:bg-[#59C6D2] WorkSans">Sign Up</button>
              </div>
            </div>
        </div>
    );
};

export default NavBar;