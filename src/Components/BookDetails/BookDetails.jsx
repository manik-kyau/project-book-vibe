import { useLoaderData, useParams } from "react-router-dom"; 
import { getStoredData, saveDataToLS, savedWishBook } from "../../Utility/localstorage";
import { toast } from "react-toastify";

const BookDetails = () => {
    const books = useLoaderData();
    
    const {id} = useParams();
    const intId = parseInt(id);
    const book = books.find(item =>item.id == intId);
    
    const {bookName,author,image,rating,tags,category,yearOfPublishing,publisher,totalPages,review} = book || {};

    const handleReadBtn = () =>{
      saveDataToLS(intId);
    }
    const handleWishistBtn = () =>{
    const storedReadBookId = getStoredData();
    const checkBookId = storedReadBookId.find(bookID => bookID == intId);
    if(!checkBookId){
      console.log(checkBookId)
      savedWishBook(intId)
    }
    else{
      toast.error('You Have Already Read This Book');
    }
    }

    return (
        <div>
            <div className=" my-12">
              <div className="flex flex-col lg:flex-row gap-7 lg:gap-12 p-5">
                <div className="lg:w-[540px] flex justify-center items-center bg-[#1313130d] rounded-2xl py-8">
                    <img src={image} className=" h-[250px] lg:h-[500px] rounded-lg shadow-2xl" />
                </div>
                <div className="lg:w-1/2">
                  <h1 className="text-[40px]  font-bold workSans">{bookName}</h1>
                  <h2 className="text-xl font-medium my-5 WorkSans">By: {author}</h2>
                  <h3 className="text-xl font-medium py-4 border-y-2 WorkSans">{category}</h3>
                  <p className="text-base font-normal py-6 WorkSans">{review}</p>
                  <p  className="pb-5 border-b-2 WorkSans">
                    <span className="text-base font-bold mr-4 WorkSans">tag:</span>
                    {
                      tags.map((tag,idx)=><span key={idx} className="base font-medium text bg-[#23be0a0d] rounded-[30px] text-center text-[#23BE0A] px-4 mr-3 py-1 WorkSans">#{tag}</span>)
                    }
                 </p>
                   <div className="flex gap-7 lg:gap-[55px]">
                        <div className="space-y-3 mt-6 mb-8 w-[140px] ">
                          <h2 className="text-base font-normal WorkSans">Number of Pages:</h2>
                          <h2 className="text-base font-normal WorkSans">Publisher:</h2>
                          <h2 className="text-base font-normal WorkSans">Year of Publishing:</h2>
                          <h2 className="text-base font-normal WorkSans">Rating:</h2>
                        </div>
                        <div className="space-y-3 mt-6 mb-8 text-base font-semibold">
                            <h2 className="WorkSans">{totalPages}</h2>
                            <h2 className="WorkSans">{publisher}</h2>
                            <h2 className="WorkSans">{yearOfPublishing}</h2>
                            <h2 className="WorkSans">{rating}</h2>
                        </div>
                   </div>
                  <div className="space-x-4 ">
                    <button onClick={()=>handleReadBtn()} className="btn bg-white hover:text-white hover:bg-[#23BE0A] border-2 text-lg font-semibold border-gray-300 hover:border-[#23BE0A] px-7 WorkSans">Read</button>
                    <button onClick={handleWishistBtn} className="btn bg-[#50B1C9] text-lg font-semibold hover:bg-[#50B1C9] text-white Worksans">Wishlist</button>
                  </div>
                </div>
              </div>
              
            </div>
        </div>
    );
};

export default BookDetails;