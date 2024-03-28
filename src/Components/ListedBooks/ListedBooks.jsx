import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className="">
            <h2 className="text-[28px] font-bold py-8 bg-[#1313130d] text-center rounded-2xl my-8 WorkSans text-[#131313] playfair">Books</h2>
            

                <div className=" text-center">
                <select className="text-lg bg-[#23BE0A]  px-5 py-4 font-semibold outline-none text-white mx-auto rounded-lg WorkSans" name="" id="">
                    <option className="text-black bg-gray-100  py-6" value="">Sort By</option>
                    <option className="text-black bg-gray-100" value="">Rating</option>
                    <option className="text-black bg-gray-100" value="">Number Of Page</option>
                    <option className="text-black bg-gray-100" value="">Publisher Year</option>
                </select>
            </div>
            <div className=" mt-14 mb-12  ">
                <div className="flex items-center dark:bg-gray-100 dark:text-gray-800">
                    <Link 
                    to="" 
                    onClick={()=>setTabIndex(0)}
                    className={`flex items-center flex-shrink-0 px-4 py-2 space-x-2 ${tabIndex === 0 ? 'border-2 border-b-0 rounded-t-lg' : 'border-b-2 '} dark:border-gray-600 dark:text-gray-600`}>
                    <span className="text-lg font-normal WorkSans">Read Books</span>
                    </Link>
                    <Link
                    to='wishlistbooks' 
                    onClick={()=>setTabIndex(1)}
                    className={`flex items-center flex-shrink-0 px-4 py-2 space-x-2 ${tabIndex === 1 ? 'border-2 border-b-0' : 'border-b-2'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                        
                        <span className="text-lg font-normal WorkSans">Wishlist Books</span>
                    </Link>
                    <div className="border-b-2 mt-[44px] w-full"></div>
                </div>
                <div className=""></div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;