import { useLoaderData, useParams } from "react-router-dom"; 

const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const book = books.find(item =>item.id == id);
    const {bookName,author,image,rating,tags,category,yearOfPublishing,publisher,totalPages,review} =book || {};
    return (
        <div>
            <div className=" my-12">
              <div className="flex gap-12">
                <div className="w-[540px] flex justify-center items-center bg-[#1313130d] rounded-2xl">
                    <img src={image} className="h-[500px] rounded-lg shadow-2xl" />
                </div>
                <div className="w-1/2">
                  <h1 className="text-[40px]  font-bold">{bookName}</h1>
                  <h2 className="text-xl font-medium my-5">By: {author}</h2>
                  <h3 className="text-xl font-medium py-4 border-y-2">{category}</h3>
                  <p className="text-base font-normal py-6">{review}</p>
                  <p  className="pb-5 border-b-2">
                    <span className="text-base font-bold mr-4 ">tag:</span>
                    <span className="base font-medium text bg-[#23be0a0d] rounded-[30px] text-center text-[#23BE0A] px-4 mr-6">{tags}</span>
                 </p>
                   <div className="flex gap-[55px]">
                        <div className="space-y-3 mt-6 mb-8 w-[140px]">
                          <h2 className="text-base font-normal ">Number of Pages:</h2>
                          <h2 className="text-base font-normal">Publisher:</h2>
                          <h2 className="text-base font-normal">Year of Publishing:</h2>
                          <h2 className="text-base font-normal">Rating:</h2>
                        </div>
                        <div className="space-y-3 mt-6 mb-8 text-base font-semibold">
                            <h2>{totalPages}</h2>
                            <h2>{publisher}</h2>
                            <h2>{yearOfPublishing}</h2>
                            <h2>{rating}</h2>
                        </div>
                   </div>
                  <div className="space-x-4 text-lg font-semibold">
                    <button className="btn bg-white hover:bg-white border-2 border-gray-300">Get Started</button>
                    <button className="btn bg-[#50B1C9] hover:bg-[#50B1C9] text-white">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default BookDetails;