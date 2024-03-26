import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0)
    return (
        <div>
            <h2 className="text-[28px] font-bold py-8 bg-[#1313130d] text-center rounded-2xl my-8">Books</h2>
            <div className="text-center">
                <button className="btn bg-[#23BE0A] hover:bg-[#23BE0A] text-white text-lg font-semibold">Sort By {FaAngleDown}</button>
            </div>
            <div className=" mt-14 mb-12">
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                    <Link 
                    to='readbooks' 
                    onClick={()=>setTabIndex(0)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border-2 border-b-0' : 'border-b-2'} dark:border-gray-600 dark:text-gray-600`}>
                    <span className="text-lg font-normal">Read Books</span>
                    </Link>
                    <Link
                    to='wishlistbooks' 
                    onClick={()=>setTabIndex(1)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border-2 border-b-0' : 'border-b-2'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                        
                        <span className="text-lg font-normal">Wishlist Books</span>
                    </Link>
                    <p rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b-2 rounded-t-lg dark:border-gray-600 dark:text-gray-900 w-[1000px]  pb-10">
                    </p>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;