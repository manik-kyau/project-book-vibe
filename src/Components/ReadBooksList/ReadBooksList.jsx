import PropTypes from 'prop-types';
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
                  <h1 className="text-2xl font-bold playfair text-[#131313]">{bookName}</h1>
                  <h2 className="text-base font-medium my-4 WorkSans text-[#131313cc]">By: {author}</h2>
                  <div className="flex gap-6 w-full">
                    <div className="flex gap-3">
                        <h2 className="text-base font-bold WorkSans">Tags:</h2>
                        {
                            tags.map((tag,idx)=> <h2 className=" text-center text-base bg-[#23be0a0d] font-medium text-[#23BE0A] px-5 py-1 rounded-[30px] WorkSans" key={idx}>#{tag}</h2>)
                        }
                    </div>
                    <p className="flex items-center gap-2 text-base font-normal WorkSans text-[#131313cc]">
                        <SlLocationPin></SlLocationPin>
                        Year of Publishing: {yearOfPublishing}
                    </p>
                  </div>
                  <div className="flex gap-5 mt-4 pb-[18px] border-b-2"> 
                        <p className="flex items-center gap-2 WorkSans text-[#13131399]">
                            <IoPeopleOutline></IoPeopleOutline>
                            Publisher: {publisher}
                        </p>
                        <p className="flex items-center gap-2 WorkSans text-[#13131399]">
                            <img className="h-4 w-4" src={page} alt="" />
                            Page {totalPages}
                        </p>
                    </div>
                  <div className="flex items-center gap-4 mt-4">
                    <h3 className="text-base font-normal text-[#328EFF] px-5 py-1 rounded-[30px] bg-[#328eff26] WorkSans">Category: {category}</h3>
                    <h2 className="text-base font-normal px-5 py-1 text-[#FFAC33] bg-[#ffac3326] rounded-[30px] WorkSans">Rating: {rating}</h2>
                    <button className="text-white bg-[#23BE0A] text-lg font-semibold border-gray-300  px-5 py-1 rounded-[30px] WorkSans">View Details</button>
                    
                  </div>
                </div>
              </div>
        </div>
    );
};
ReadBooksList.propTypes={
    ReadBooksList: PropTypes.object.isRequired,
    books: PropTypes.object.isRequired,
}

export default ReadBooksList;