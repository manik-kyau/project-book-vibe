import PropTypes from 'prop-types'
import { MdOutlineStarBorder } from "react-icons/md";
import { Link } from "react-router-dom";
const BookCard = ({book}) => {
    const {id,bookName,author,image,rating,tags,category} = book || {};
    return (
        <Link to={`/bookcard/${id}`}>
            <div className="card card-compact bg-base-100 border rounded-xl p-6">
              <div className="flex justify-center py-8 bg-[#F3F3F3] rounded-xl">
                    <img className="h-[200px] w-[150px]"  src={image} alt="Shoes" />
              </div>

                <div className="flex gap-3">
                    {
                        tags.map((tag, idx)=><h3 className="bg-[#23be0a0d] rounded-[30px] text-center text-base font-medium text-[#23BE0A] px-4 mt-6 WorkSans" key={idx}>{tag}</h3>)
                    }
                </div>
              <div className="">
                
                <h2 className="text-2xl font-bold mt-4 mb-4 playfair">{bookName}</h2>
                <p className="text-base font-medium mb-6 pb-5 border-b-2 border-dashed WorkSans">By: {author}</p>
                <div className="flex justify-between">
                    <h2 className="text-base font-medium WorkSans">{category}</h2>
                    <h3 className="flex gap-2 items-center text-base font-medium WorkSans">
                        {rating}
                        <MdOutlineStarBorder className="h-5 w-5"></MdOutlineStarBorder>
                    </h3>
                </div>
              </div>
            </div>
        </Link>
    );
};
BookCard.propTypes = {
    bookcard: PropTypes.object,
    book: PropTypes.object.isRequired,
}
export default BookCard;


