import { SlLocationPin } from "react-icons/sl";
import { IoPeopleOutline } from "react-icons/io5";
import page from '../../assets/images/page.png'
const ReadBooksList = ({books}) => {
    const {bookName,author,image,rating,tags,category,yearOfPublishing,publisher,totalPages} = books || {};
    return (
        <div>
            <div className="h-[270px] flex gap-12  border-2 p-5 rounded-2xl">
                <div className="w-[230px] flex justify-center items-center bg-[#1313130d] rounded-2xl">
                    <img src={image} className="rounded-lg shadow-2xl" />
                </div>
                <div className="">
                  <h1 className="text-2xl font-bold">{bookName}</h1>
                  <h2 className="text-base font-medium my-4">By: {author}</h2>
                  <div className="flex gap-6 w-full">
                    <div className="flex gap-3">
                        <h2 className="text-base font-bold">Tags:</h2>
                        {
                            tags.map((tag,idx)=> <h2 className=" text-center text-base bg-[#23be0a0d] font-medium text-[#23BE0A] px-5 py-1 rounded-[30px]" key={idx}>#{tag}</h2>)
                        }
                    </div>
                    <p className="flex items-center gap-2 text-base font-normal">
                        <SlLocationPin></SlLocationPin>
                        Year of Publishing: {yearOfPublishing}
                    </p>
                  </div>
                  <div className="flex gap-5 mt-4 pb-[18px] border-b-2"> 
                        <p className="flex items-center gap-2">
                            <IoPeopleOutline></IoPeopleOutline>
                            Publisher: {publisher}
                        </p>
                        <p className="flex items-center gap-2">
                            <img className="h-4 w-4" src={page} alt="" />
                            Page {totalPages}
                        </p>
                    </div>
                  <div className="flex items-center gap-4 mt-4">
                    <h3 className="text-base font-normal text-[#328EFF] px-5 py-1 rounded-[30px] bg-[#328eff26]">Category: {category}</h3>
                    <h2 className="text-base font-normal px-5 py-1 text-[#FFAC33] bg-[#ffac3326] rounded-[30px]">Rating: {rating}</h2>
                    <button className="text-white bg-[#23BE0A] text-lg font-semibold border-gray-300  px-5 py-1 rounded-[30px]">View Details</button>
                    
                  </div>
                </div>
              </div>
        </div>
    );
};

export default ReadBooksList;